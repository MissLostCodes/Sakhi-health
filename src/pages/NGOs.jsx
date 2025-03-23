import React from "react";

function NGOs() {
  // Sample random data
  const ngos = [
    { name: "Swasth Mahila Foundation", village: "Rampur", condition: "Severe", helpline: "1800-123-4567" },
    { name: "Women Wellness Trust", village: "Bijnor", condition: "Mild", helpline: "1800-987-6543" },
    { name: "Health First NGO", village: "Sitapur", condition: "Healthy", helpline: "1800-555-0199" },
    { name: "Arogya Sahayata", village: "Ghaziabad", condition: "Severe", helpline: "1800-777-0001" },
    { name: "Nari Suraksha", village: "Varanasi", condition: "Mild", helpline: "1800-888-2020" },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Nearby NGOs and ASHA Workers</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>NGO Name</th>
            <th>Village</th>
            <th>Menstrual Health Condition</th>
            <th>Helpline</th>
          </tr>
        </thead>
        <tbody>
          {ngos.map((ngo, index) => (
            <tr key={index} style={styles[ngo.condition.toLowerCase()]}>
              <td>{ngo.name}</td>
              <td>{ngo.village}</td>
              <td>{ngo.condition}</td>
              <td>{ngo.helpline}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Additional Information */}
      <div style={styles.infoBox}>
        <h3>Did You Know?</h3>
        <p>
          ASHA workers play a crucial role in improving menstrual hygiene awareness in rural areas. They provide free sanitary pads and educate young girls about menstrual health.
        </p>
        <p>
          If you or someone you know is facing menstrual health issues, don't hesitate to reach out to these NGOs for support. Regular health check-ups and proper hygiene can significantly improve menstrual well-being.
        </p>
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
  },
  heading: {
    color: "#d63384",
    marginBottom: "20px",
  },
  table: {
    width: "80%",
    margin: "0 auto",
    borderCollapse: "collapse",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#fff",
  },
  severe: {
    backgroundColor: "#ffdddd",
  },
  mild: {
    backgroundColor: "#fff4cc",
  },
  healthy: {
    backgroundColor: "#ddffdd",
  },
  infoBox: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
};

export default NGOs;
