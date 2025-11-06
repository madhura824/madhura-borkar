"use client"
export const Header = () => {
return(
  <div className="flex justify-center items-center z-30 max-w-[100%] w-fit m-5">
  <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur items-center justify-start text-center w-full overflow-x-auto whitespace-nowrap scrollbar-hide">
    <a href="/" className="nav-item">About</a> 
    <a href="/#education-and-work-experience" className="nav-item">Education and Work</a>
    <a href="/#projects" className="nav-item">Projects</a> 
    <a href="/#resume" className="nav-item">Resume</a> 
    {/* <a href="/#about-me" className="nav-item">About</a>  */}
    <a href="/#contact-me" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
  </nav>
</div>

)
};
