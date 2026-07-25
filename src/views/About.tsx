// import "./About.css";

// const About = () => {
//   return (
//     <section className="about-section">
//       {/* LEFT SIDE */}
//       <div className="about-image">
//         <img src="/homepage.jpeg" alt="Submersible Pump" />

//         <div className="experience-box">
//           <h2>30+</h2>
//           <p>
//             YEARS OF
//             <br />
//             EXCELLENCE
//           </p>
//         </div>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="about-content">
//         <p className="about-tag">ABOUT US</p>

//         <h2>
//           Delivering Reliability
//           <br />
//           For Over <span>30+ Years</span>
//         </h2>

//         <p className="about-description">
//           Since 1993, AquaFlow Pumps has been a trusted name in the submersible
//           pump industry. Our commitment to quality, innovation and customer
//           satisfaction has made us a preferred choice for thousands of
//           customers.
//         </p>

//         <div className="features">
//           <div className="feature">
//             <span>✔</span>
//             <p>Advanced Technology</p>
//           </div>

//           <div className="feature">
//             <span>✔</span>
//             <p>Strict Quality Standards</p>
//           </div>

//           <div className="feature">
//             <span>✔</span>
//             <p>Wide Range of Products</p>
//           </div>

//           <div className="feature">
//             <span>✔</span>
//             <p>Excellent After-Sales Service</p>
//           </div>
//         </div>

//         <button className="about-btn">Know More About Us</button>
//       </div>
//     </section>
//   );
// };

// export default About;
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-content">
          <span className="about-tag">About Us</span>

          <h1>
            Welcome to <span>MSP - Maruti Submersible Pump</span>
          </h1>

          <p>
            MSP (Maruti Submersible Pump) has been a trusted name in the pump
            industry for more than <strong>30 years</strong>. Established with a
            commitment to quality, durability, and customer satisfaction, we
            have proudly served thousands of customers by providing reliable
            submersible pump solutions for agricultural, residential, and
            industrial applications.
          </p>

          <p>
            Under the leadership of <strong>Mr. Vivek Rathod</strong>, MSP
            continues to deliver premium products that combine advanced
            technology with dependable performance. Every product is selected
            and supplied with the goal of ensuring long-lasting efficiency and
            value for our customers.
          </p>

          <p>
            Based in <strong>Botad, Gujarat</strong>, we have earned the trust
            of farmers, businesses, and households through honest service,
            quality products, and strong after-sales support. Our experience of
            over three decades allows us to recommend the right pumping
            solutions for every requirement.
          </p>

          <div className="about-info">
            <div className="info-card">
              <h3>30+</h3>
              <p>Years of Experience</p>
            </div>

            <div className="info-card">
              <h3>Quality</h3>
              <p>Trusted Products</p>
            </div>

            <div className="info-card">
              <h3>Service</h3>
              <p>Customer First</p>
            </div>
          </div>

          <div className="contact-box">
            <h2>Contact Us</h2>

            <p>
              <strong>Owner:</strong> Vivek Rathod
            </p>

            <p>
              <strong>Location:</strong> Botad, Gujarat
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+918141070768">+91 81410 70768</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
