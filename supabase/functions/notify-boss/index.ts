import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const BOSS_EMAIL = Deno.env.get("BOSS_EMAIL") || "boss@example.com"; // Fallback if not set in env

// Helper to handle CORS
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY environment variable");
    }

    // Parse the JSON payload coming from the client
    const body = await req.json();
    const { type, data } = body; 
    // type will be 'PLAYER' or 'FRANCHISE'
    // data is the exact payload that was saved to Supabase

    let subject = "";
    let htmlContent = "";

    if (type === "PLAYER") {
      subject = `🏏 New Player Registration: ${data.first_name} ${data.last_name}`;
      htmlContent = `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #b5e823; padding: 20px; text-align: center;">
            <h2 style="margin: 0; color: #111;">New Player Registration</h2>
          </div>
          <div style="padding: 20px;">
            <p><strong>Name:</strong> ${data.prefix || ""} ${data.first_name} ${data.last_name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>WhatsApp:</strong> ${data.whatsapp}</p>
            <p><strong>DOB:</strong> ${data.dob} (Age: ${data.age})</p>
            <p><strong>City/State:</strong> ${data.city}, ${data.state}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <h3 style="margin-top: 0;">Cricket Profile</h3>
            <p><strong>Role:</strong> ${data.playing_role || "N/A"}</p>
            <p><strong>Batting Style:</strong> ${data.batting_style || "N/A"}</p>
            <p><strong>Bowling Style:</strong> ${data.bowling_style || "N/A"}</p>
            <p><strong>Achievements:</strong> ${data.achievement || "None"}</p>
          </div>
        </div>
      `;
    } else if (type === "FRANCHISE") {
      subject = `🏢 New Franchise Application: ${data.preferred_name || data.applicant_name || data.franchise_name}`;
      htmlContent = `
        <div style="font-family: sans-serif; color: #333; max-width: 640px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; background: #fff;">
          <div style="background-color: #111; color: #b5e823; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">New Franchise Application</h2>
            <p style="margin: 5px 0 0; font-size: 14px; color: #c8d8c0;">Ref #: ${data.reference_no || 'N/A'}</p>
          </div>
          <div style="padding: 20px;">
            <h3 style="margin-top: 0; color: #111; border-bottom: 2px solid #b5e823; padding-bottom: 6px;">1. Franchise Information</h3>
            <p><strong>Applicant / Org Name:</strong> ${data.applicant_name || 'N/A'}</p>
            <p><strong>Entity Type:</strong> ${data.entity_type || 'N/A'}</p>
            <p><strong>Email:</strong> ${data.franchise_email || 'N/A'}</p>
            <p><strong>Mobile:</strong> ${data.franchise_phone || 'N/A'}</p>
            <p><strong>Registered Address:</strong> ${data.franchise_address || 'N/A'}</p>
            <p><strong>Website / Social:</strong> ${data.franchise_website || 'N/A'}</p>
            <p><strong>Annual Turnover:</strong> ${data.annual_turnover || 'N/A'}</p>
            <p><strong>Industry Experience:</strong> ${data.experience || 'N/A'}</p>
            <p><strong>Source of Investment:</strong> ${data.investment_source || 'N/A'}</p>
            <p><strong>Preferred Name / State:</strong> ${data.preferred_name || 'N/A'}</p>
            <p><strong>Message:</strong> ${data.message || 'N/A'}</p>

            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            
            <h3 style="margin-top: 0; color: #111; border-bottom: 2px solid #b5e823; padding-bottom: 6px;">2. Owner / Authorized Contact</h3>
            <p><strong>Owner Name:</strong> ${data.owner_prefix || ''} ${data.owner_first_name || ''} ${data.owner_last_name || ''}</p>
            <p><strong>Designation:</strong> ${data.owner_designation || 'N/A'}</p>
            <p><strong>DOB:</strong> ${data.owner_dob || 'N/A'}</p>
            <p><strong>Personal Email:</strong> ${data.owner_email || 'N/A'}</p>
            <p><strong>Mobile:</strong> ${data.owner_phone || 'N/A'} ${data.owner_alt_phone ? `(Alt: ${data.owner_alt_phone})` : ''}</p>
            <p><strong>Nationality:</strong> ${data.owner_nationality || 'N/A'}</p>
            <p><strong>Residential Address:</strong> ${data.owner_addr1 || ''} ${data.owner_addr2 || ''}, ${data.owner_city || ''}, ${data.owner_state || ''} - ${data.owner_postal || ''}</p>
          </div>
        </div>
      `;
    } else {
      throw new Error("Invalid registration type specified.");
    }

    // Send email via Resend API
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "MCL Notifications <onboarding@resend.dev>", // Replace with verified domain later if you have one
        to: [BOSS_EMAIL],
        subject: subject,
        html: htmlContent,
      }),
    });

    const responseData = await res.json();

    if (!res.ok) {
      throw new Error(`Resend Error: ${JSON.stringify(responseData)}`);
    }

    return new Response(JSON.stringify({ success: true, id: responseData.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
