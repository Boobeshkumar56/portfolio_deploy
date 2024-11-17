const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <div className="social-icon">
            <img src="/assets/github.png" alt="github" className="w-1/2 h-1/2" onClick={() => window.open("https://github.com/boobeshkumar56")} target="_blank" />
          </div>
          <div className="social-icon">
            <img src="/assets/linkedin.png" alt="linkedIn" className="w-1/2 h-1/2" onClick={() => window.open("https://www.linkedin.com/in/boobesh-kumar-b99b90281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app")} target="_blank" />
          </div>
          <div className="social-icon">
            <img src="/assets/twitter.png" alt="twitter" className="w-1/2 h-1/2"onClick={() => window.open("https://x.com/Boobesh91528197/")} target="_blank"  />
          </div>
        </div>
  
        <p className="text-white-500">© 2024 Boobesh Kumar S. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;