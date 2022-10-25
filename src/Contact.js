import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2>Contact</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4349451735193!2d78.38683161418828!3d17.438884405909487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e294aa919b%3A0xa3c141fd48a81d42!2sInorbit%20Mall%20Rd%2C%20Vittal%20Rao%20Nagar%2C%20HITEC%20City%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1664699498470!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    
    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xbjbygrk" method="POST" className="contact-inputs">
          <input type="text" placeholder="username" name="username" required autoComplete="off" />
          <input type="email" placeholder="email" name="email" />
          <textarea name="Message" placeholder="Enter your message" rows="10" cols="30" required autoComplete="off"></textarea>
          <input type="submit" />
        </form>
      </div>
    </div>
  </Wrapper>;
};

export default Contact;
