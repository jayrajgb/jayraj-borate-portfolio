import { Resend } from "resend";
import Email from "@/components/Email"; 

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Get form data from the request
    const formData = await req.formData();

    // Extract fields from form data
    const userFirstName = formData.get('userFirstName') as string;
    const loginDate = formData.get('loginDate') as string;
    const userMessage = formData.get('userMessage') as string;
    const userEmail = formData.get('userEmail') as string;

    // Check if all required fields are present
    if (!userFirstName || !loginDate || !userMessage || !userEmail) {
      return Response.json(
        { error: "Missing required fields in the request payload" },
        { status: 400 }
      );
    }

    // Date Formatting
    const utcDate = new Date(loginDate);
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false
    });
    const localDate = new Date(formatter.format(utcDate));

    // Generate the email content using the React component
    const emailContent = Email({
      userFirstName,
      loginDate: localDate,
      userMessage,
      userEmail,
      preview: "New Contact Information - Portfolio Website",
      heading1: "Hi Jayraj Borate,",
      heading2: "A new contact has visited the website and needs to connect.",
      footer: `We noticed a new user, ${userFirstName}, contacting you through your website.`,
    });

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: "MyPortfolio <onboarding@resend.dev>",
      to: ["jayrajgborate11@gmail.com"],
      subject: "New Connection Request",
      react: emailContent
    });

    // Handle errors from Resend
    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    // Respond with the email service's response
    return Response.json(data);
  } catch (error) {
    console.error("Error in POST handler:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}