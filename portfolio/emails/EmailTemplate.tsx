import { Body, Container, Head, Heading, Hr, Html, Img, Preview, Section, Text } from "@react-email/components"

interface WelcomeEmailProps {
  userFirstname: string
  userMessage: string
  userEmail: string
}

export const WelcomeEmail = ({ userFirstname, userMessage, userEmail }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>A user / viewer of your Portfolio reached out.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New Message from Your Portfolio</Heading>
        <Section style={section}>
          <Text style={paragraph}>Hi Sanele,</Text>
          <Text style={paragraph}>
            You've received a new message from <strong>{userFirstname}</strong>.
          </Text>
        </Section>
        <Section style={messageSection}>
          <Text style={messageHeader}>Message:</Text>
          <Text style={message}>{userMessage}</Text>
        </Section>
        <Section style={section}>
          <Text style={paragraph}>
            Reply to:{" "}
            <a href={`mailto:${userEmail}`} style={link}>
              {userEmail}
            </a>
          </Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          Best regards,
          <br />
          Your Portfolio Website
        </Text>
      </Container>
    </Body>
  </Html>
)

export default WelcomeEmail

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  maxWidth: "600px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
}

const logo = {
  margin: "0 auto 20px",
  display: "block",
}

const heading = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#333",
  textAlign: "center" as const,
  margin: "30px 0",
}

const section = {
  margin: "0 0 20px",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#51545E",
}

const messageSection = {
  backgroundColor: "#f4f7fa",
  borderRadius: "4px",
  padding: "20px",
  marginBottom: "20px",
}

const messageHeader = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#333",
}

const message = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#51545E",
  whiteSpace: "pre-wrap" as const,
}

const link = {
  color: "#2754C5",
  textDecoration: "underline",
}

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
}

const footer = {
  fontSize: "14px",
  color: "#898989",
  textAlign: "center" as const,
  marginTop: "20px",
}

