import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  button: {
    padding: "10px",
    backgroundColor: "blue",
    color: "white",
    textDecoration: "none"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  }
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Name: John Doe</Text>
        <Text>Email: johndoe@example.com</Text>
        <Text>Phone: 1234567890</Text>
      </View>
    </Page>
  </Document>
);

const ResumePDF = () => (
  <div style={styles.buttonContainer}>
    <PDFDownloadLink document={<MyDocument />} fileName="resume.pdf" style={styles.button}>
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
  </div>
);

export default ResumePDF;
