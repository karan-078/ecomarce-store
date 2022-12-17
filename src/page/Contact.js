import {IoMdCall} from 'react-icons/io'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
const Contact = () => {
  return (
    <>
      {/* <div className="contact_maneheading">
        {" "}
        <h2 className="common-heading">Contact-us</h2>
      </div>
      <section className="contact_main">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
          width="100%"
          title="google_map"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="container_contact">
          <div className="contact-form">
          <form
              action="https://formspree.io/f/xeqdgwnq"
              method="POST"
              className="contact-inputs"
            >
              <input
                type="text"
                placeholder="username"
                name="username"
                required
                autoComplete="off"
              />

              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />

              <textarea
                name="Message"
                cols="30"
                rows="10"
                required
                autoComplete="off"
                placeholder="Enter you message"
              ></textarea>

              <input type="submit" value="send" />
            </form>
          </div>
        </div>
      </section> */}

      <div className="main_contact_container">
        <section className="contact_us">
          <div className="loction_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
              width="100%"
              title="google_map"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="contact_info">
            <div className="contact_1">
              <div className="info_headline
              ">
                <h2>Contact Us</h2>
              </div>
              <div className="info">
              <span className='contact_icon'>
                <IoMdCall  className='social_icon'/>
                </span>
                <h2>Contact-No - <span>7895968423</span></h2>
              </div>
              <div className="info">
                <span className='contact_icon'>
                  <MdOutlineMailOutline className='social_icon'/> 
                </span>
              <h2>Email <span>bidht117@gmail.com</span></h2>

              </div>
              <div className="info">
              <span className='contact_icon'>
               <BsFacebook className='social_icon'/>
               </span>
                <h2>Facebook</h2>
              </div>
            </div>

            <div className="contact_2">
              <div className="contact_headline">
                <h2>We're Here For You, Wherever You Need US</h2>
              </div>

              <form
                action="https://formspree.io/f/xeqdgwnq"
                method="POST"
                className="contact-inputs"
              >
                <div className="info_add">
                  <div className="border_input">
                    <input
                      type="text"
                      placeholder="username"
                      name="username"
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div className="border_input">
                    <input
                      type="email"
                      placeholder="Email"
                      name="Email"
                      required
                      autoComplete="off"
                    />
                  </div>

                  <div className="border_input">
                    <input
                      type="number"
                      placeholder="Number"
                      name="Number"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="add_meassege">
                  <textarea
                    name="Message"
                    // cols="40"
                    rows="10"
                    required
                    autoComplete="off"
                    placeholder="Enter you message"
                    id="add_m"
                  ></textarea>
                </div>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
