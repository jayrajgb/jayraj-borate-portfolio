import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface EmailProps {
    userFirstName?: string;
    loginDate?: Date;
    userMessage?: string;
    userEmail?: string;
    preview?: string;
    heading1?: string;
    heading2?: string;
    footer?: string;
  }
  
  export const Email = ({
    userFirstName,
    loginDate,
    userMessage,
    userEmail,
    preview,
    heading1,
    heading2,
    footer
  }: EmailProps) => {
    const formattedDate = new Intl.DateTimeFormat("en", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(loginDate);
  
    return (
      <Html>
        <Head />
        <Preview>{`${preview}`}</Preview>
        <Body style={main}>
          <Container>
            <Section style={content}>
              <Row>
                <Img
                  style={image}
                  width={600}
                  src={"https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gmail_powered_by_ai_hero.width-1200.format-webp.webp"}
                />
              </Row>
  
              <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                <Column>
                  <Heading
                    style={{
                      fontSize: 28,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {heading1}
                  </Heading>
                  <Heading
                    as="h2"
                    style={{
                      fontSize: 24,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {heading2}
                  </Heading>
  
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Name: </b>
                    {userFirstName}
                  </Text>
  
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Email: </b>
                    {userEmail}
                  </Text>
  
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Message: </b>
                    {userMessage}
                  </Text>
  
                  <Text style={paragraph}>
                    <b>Time: </b>
                    {formattedDate}
                  </Text>
  
                  <Text style={paragraph}>
                    {footer}
                  </Text>
  
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>MyPortfolio</b>
                  </Text>
  
                </Column>
              </Row>
              <Row style={{ ...boxInfos, paddingTop: "2" }}>
                <div style={{ textAlign: "center", width: "100%" }}>
                  <Button href="https://jayraj-borate.vercel.app/" target="_blank" style={button}>Visit Website</Button>
                </div>
              </Row>
            </Section>
          </Container>
        </Body>
      </Html>
    );
  };
  
  export default Email;
  
  const main = {
    backgroundColor: "#fff",
    borderRadius: 5,
    border: "1px solid rgb(255,255,255, 0.75)",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const paragraph = {
    fontSize: 16,
  };
  
  const button = {
    backgroundColor: "#023e8a",
    borderRadius: 5,
    color: "#FFF",
    fontWeight: "bold",
    border: "1px solid rgb(0,0,0, 0.1)",
    padding: "12px 30px",
  };
  
  const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: 5,
    overflow: "hidden",
  };
  
  const image = {
    maxWidth: "100%",
  
  };
  
  const boxInfos = {
    padding: "20px",
  };
  