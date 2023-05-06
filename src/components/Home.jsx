import facebook from '../assets/img/icon-facebook.svg'
import instagram from '../assets/img/icon-instagram.svg'
import twitter from '../assets/img/icon-twitter.svg'
import computer1 from '../assets/img/image-computer.png'
import devised from '../assets/img/image-devices.png'
import google from '../assets/img/logo-google.png'
import hp from '../assets/img/logo-hp.png'
import ibm from '../assets/img/logo-ibm.png'
import microsoft from '../assets/img/logo-microsoft.png'
import graphics from '../assets/img/logo-vector-graphics.png'
import logo from '../assets/img/logo.svg'

const Home = () => {
  return (
    <>
      {/* hero section */}
      <section id="hero">
        <div className="section-container mb-40 pt-10">
          <img className="mx-auto my-16" src={logo} alt="Logo" />
          <h3>A history of everything you copy</h3>
          <p className="section-content mb-10">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <div className="button-container">
            <a className="bg-slate-500 btn">Download for iOS</a>
            <a className="btn bg-indigo-500">Download for Mac</a>
          </div>
        </div>
      </section>

      {/* snippets section */}
      <section id="snippets">
        <div className="section-container">
          <h3>Keep track of your snippets</h3>
          <p className="section-content mb-10 text-2xl">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>

      <section id="features">
        <div className="section-container my-20">
          <div className="relative flex flex-col md:flex-row md:space-x-32">
            <div className="md:w-1/2">
              <img
                className="md:absolute top-0 right-[50%]"
                src={computer1}
                alt=""
              />
            </div>
            <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
              <div>
                <h5>Quick Search</h5>
                <p className="max-w-md">
                  Easily search your snippets by content, category, web address,
                  application, and more
                </p>
              </div>
              <div>
                <h5>iCloud Sync</h5>
                <p className="max-w-md">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
              <div>
                <h5>Completely History</h5>
                <p className="max-w-md">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-container my-20">
          <h3>Access Clipboard Anywhere</h3>
          <p className="section-content mb-24">
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <img className="mx-auto" src={devised} alt="" />
        </div>
      </section>

      <section>
        <div className="section-container my-20">
          <h3>Supercharge your workflow</h3>
          <p className="section-content">
            We've got the tools to boost your productivity.
          </p>
          <div className="flex flex-col items-center jus md:space-x-12">
            <div className="flex flex-col items-center space-y-5">
              <i>icon</i>
              <h5>Create Blacklists</h5>
              <p className="max-w-md">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-5">
              <i>icon</i>
              <h5>Create Blacklists</h5>
              <p className="max-w-md">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-5">
              <i>icon</i>
              <h5>Create Blacklists</h5>
              <p className="max-w-md">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-container my-20">
          <div className="flex flex-col items-center justify-between space-y-16 my-40 md:flex-row md:space-y-0">
            <img src={google} alt="" />
            <img src={ibm} alt="" />
            <img src={microsoft} alt="" />
            <img src={hp} alt="" />
            <img src={graphics} alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="section-container my-20">
          <h3>Clipboard for iOS and MacOS</h3>
          <p className="section-content mb-10">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>
          <div className="button-container">
            <a className="btn bg-slate-500 ">Download for iOS</a>
            <a className="btn bg-indigo-500 ">Download for Mac</a>
          </div>
        </div>
      </section>

      {/* footer */}
      <section>
        <div className="section-container mt-20">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <img className="" src={logo} alt="" />
            <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0">
              <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-5">
                <div className="flex flex-col space-y-4 text-center md:text-left ">
                  <div>
                    <a>FAQs</a>
                  </div>
                  <div>
                    <a>Contact us</a>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a>Privacy policy</a>
                  </div>
                  <div>
                    <a>Press kit</a>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a>Install Guide</a>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-32 py-1">
                <a href="#">
                  <img src={facebook} alt="" />
                </a>
                <a href="#">
                  <img src={twitter} alt="" />
                </a>
                <a href="#">
                  <img src={instagram} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
