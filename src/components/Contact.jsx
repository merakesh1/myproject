import React, { useEffect } from 'react';

const Contact = ({ setName }) => {
  useEffect(() => {
    setName('Contact Us');
  }, []);

  return (
    <>
      <main>
        <div className='container py-5'>
          <div className='row g-5'>
            <div className='col-xl-6'>
              <div className='row row-cols-md-2 g-4'>
                <div
                  className='aos-item'
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  <div className='aos-item__inner'>
                    <div className='bg-light hvr-shutter-out-horizontal d-block p-3'>
                      <div className='d-flex justify-content-start'>
                        <i className='fa-solid fa-envelope h3 pe-2'></i>
                        <span className='h5'>Email</span>
                      </div>
                      <span>example@domain.com</span>
                    </div>
                  </div>
                </div>
                <div
                  className='aos-item'
                  data-aos='fade-up'
                  data-aos-delay='400'
                >
                  <div className='aos-item__inner'>
                    <div className='bg-light hvr-shutter-out-horizontal d-block p-3'>
                      <div className='d-flex justify-content-start'>
                        <i className='fa-solid fa-phone h3 pe-2'></i>
                        <span className='h5'>Phone</span>
                      </div>
                      <span>+0123456789, +9876543210</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='aos-item mt-4'
                data-aos='fade-up'
                data-aos-delay='600'
              >
                <div className='aos-item__inner'>
                  <div className='bg-light hvr-shutter-out-horizontal d-block p-3'>
                    <div className='d-flex justify-content-start'>
                      <i className='fa-solid fa-location-pin h3 pe-2'></i>
                      <span className='h5'>Office location</span>
                    </div>
                    <span>#007, Street name, Bigtown BG23 4YZ, England</span>
                  </div>
                </div>
              </div>
              <div className='aos-item' data-aos='fade-up' data-aos-delay='800'>
                <div className='mt-4 w-100 aos-item__inner'>
                  <iframe
                    className='hvr-shadow'
                    width='100%'
                    height='345'
                    frameBorder='0'
                    scrolling='no'
                    marginHeight='0'
                    marginWidth='0'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2875604659243!2d78.39912837462929!3d17.49378119973248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f30076cb0f%3A0xd71e8dba19e3b3ae!2sKPHB%20METRO!5e0!3m2!1sen!2sin!4v1719583941780!5m2!1sen!2sin'
                  >
                    <a href='https://www.maps.ie/distance-area-calculator.html'>
                      measure acres/hectares on map
                    </a>
                  </iframe>
                </div>
              </div>
            </div>

            <div className='col-xl-6'>
              <h2 className='pb-4'>Leave a message</h2>
              <div className='row g-4'>
                <div className='col-6 mb-3'>
                  <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                  >
                    Fname
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Aggipetta'
                  />
                </div>
                <div className='col-6 mb-3'>
                  <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                  >
                    Lname
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleFormControlInput1'
                    placeholder='Macha'
                  />
                </div>
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='exampleFormControlInput1'
                  className='form-label'
                >
                  Email
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleFormControlInput1'
                  placeholder='name@example.com'
                />
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='exampleFormControlInput1'
                  className='form-label'
                >
                  Phone
                </label>
                <input
                  type='tel'
                  className='form-control'
                  id='exampleFormControlInput1'
                  placeholder='+911234567890'
                />
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='exampleFormControlInput1'
                  className='form-label'
                >
                  Country
                </label>
                <select
                  className='form-select'
                  aria-label='Default select example'
                >
                  <option value='1'>India</option>
                  <option value='2'>Other</option>
                </select>
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='exampleFormControlTextarea1'
                  className='form-label'
                >
                  Message
                </label>
                <textarea
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                ></textarea>
              </div>
              <button type='button' className='btn btn-dark'>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer id='site-footer' style={{ maxHeight: '10px' }}>
        <div className='bg-success bg-opacity-25 py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-xl-3 col-sm-12'>
                <h5 className='pb-3'>
                  <i className='fa-solid fa-user-group pe-1'></i> About us
                </h5>
                <span className='text-secondary'>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </span>
              </div>
              <div className='col-md-6 col-xl-3 col-sm-12'>
                <h5 className='pb-3'>
                  <i className='fa-solid fa-link pe-1'></i> Important links
                </h5>
                <ul>
                  <li>
                    <a href='#' className='text-decoration-none link-secondary'>
                      About us
                    </a>
                  </li>
                  <li>
                    <a href='#' className='text-decoration-none link-secondary'>
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href='#' className='text-decoration-none link-secondary'>
                      Terms of services
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-md-6 col-xl-3 col-sm-12'>
                <h5 className='pb-3'>
                  <i className='fa-solid fa-location-dot pe-1'></i> Our location
                </h5>
                <span className='text-secondary'>
                  KPHB
                  <br />
                  Hyderabad, Telangana
                  <br />
                  500123, India
                  <br />
                </span>
              </div>
              <div className='col-md-6 col-xl-3 col-sm-12'>
                <h5 className='pb-3'>
                  <i className='fa-solid fa-paper-plane pe-1'></i> Stay updated
                </h5>
                <form>
                  <input
                    type='text'
                    className='w-100 mb-2 form-control'
                    name=''
                    placeholder='Email ID'
                  />
                  <button className='w-100 btn btn-dark'>Subscribe now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-dark py-3'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-sm-12'>
                <ul className='list-inline mb-0'>
                  <li className='list-inline-item'>
                    <a className='btn btn-outline-secondary' href='#'>
                      <i className='fa-brands fa-facebook-f'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a className='btn btn-outline-secondary' href='#'>
                      <i className='fa-brands fa-youtube'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a className='btn btn-outline-secondary' href='#'>
                      <i className='fa-brands fa-twitter'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a className='btn btn-outline-secondary' href='#'>
                      <i className='fa-brands fa-linkedin-in'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a className='btn btn-outline-secondary' href='#'>
                      <i className='fa-brands fa-github'></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-md-6 col-sm-12'>
                <span className='text-secondary pt-1 float-md-end float-sm-start'>
                  Copyright &copy; 2024 by Kalki
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
