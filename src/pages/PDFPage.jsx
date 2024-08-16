
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Define styles similar to Tailwind CSS
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'extrabold',
    marginBottom: 20,
  },
  titlePart1: {
    color: '#180a59',
  },
  titlePart2: {
    color: '#ffdd44',
  },
  titlePart3: {
    color: '#a816bf',
  },
  
  listItem: {
    marginBottom: 15,
    fontSize: 12,
    textAlign: 'justify',
  },
  strong: {
    fontSize: 16,
    marginBottom: 5,
  },
});

const PDFPage = () => (
  <Document>
    <Page style={styles.page}>
    <Text style={styles.title}>
          <Text style={styles.titlePart1}>Questions</Text>
          <Text style={styles.titlePart2}> Answer</Text>
          <Text style={styles.titlePart3}> are given below:</Text>
        </Text>
      <View>
        <Text style={styles.listItem}>
          <Text style={styles.strong}>1. Differences between uncontrolled and controlled components - </Text>
          Controlled components in React manage form data through the component's state. They use state variables and event handlers to update and maintain the form's input values, offering greater control and ease of validation. Uncontrolled components, on the other hand, rely on the DOM to manage form data. They use refs to access the input values, leading to less boilerplate code but also less control over the data and harder validation. Controlled components are generally preferred for complex forms due to their predictability and ease of data handling.
        </Text>
        <Text style={styles.listItem}>
          <Text style={styles.strong}>2. Validate React props using PropTypes - </Text>
          To validate React props using PropTypes, import PropTypes from the 'prop-types' package. Define the expected types for your component’s props using the propTypes static property. You can specify types like PropTypes.string, PropTypes.number, and use .isRequired to make a prop mandatory. This helps catch type-related bugs and improves code documentation.
        </Text>
        <Text style={styles.listItem}>
          <Text style={styles.strong}>3. Difference between Node.js and Express.js - </Text>
          Node.js is a runtime environment that allows you to run JavaScript on the server side, enabling you to build scalable and high-performance applications. It provides core features like file system access, networking, and event handling. <br />
          Express.js, on the other hand, is a web application framework built on top of Node.js. It simplifies the process of building web applications and APIs by providing a robust set of features for routing, middleware, and request/response handling. While Node.js provides the foundation, Express.js streamlines web development tasks.
        </Text>
        <Text style={styles.listItem}>
          <Text style={styles.strong}>4. Custom Hook and Why create custom Hooks in React - </Text>
          A custom hook in React is a function that allows you to encapsulate and reuse stateful logic across components. <br />
          Creating custom hooks in React allows developers to encapsulate and reuse logic within functional components. It promotes code reusability, readability, and maintainability by abstracting away complex logic into reusable units & enabling you to share logic without duplication. It also helps in abstracting complex functionalities, making your component code cleaner and easier to read. By encapsulating related state and side effects, custom hooks improve organization and maintainability.
        </Text>
      </View>
    </Page>
  </Document>
);

export default PDFPage;
