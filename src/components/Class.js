export default function Class() {
  localStorage.getItem("class") ? localStorage.setItem("class","") : localStorage.setItem("class","");
  
  const clickEat = () => {
    if (localStorage.getItem("class")){
      document.getElementById(localStorage.getItem("class")).classList.remove("classItem--active");
    }
    document.getElementById("eat").classList.add("classItem--active");
    localStorage.setItem("class","eat");
  }
  const clickClothes = () => {
    if (localStorage.getItem("class")){
      document.getElementById(localStorage.getItem("class")).classList.remove("classItem--active");
    }
    document.getElementById("clothes").classList.add("classItem--active");
    localStorage.setItem("class","clothes");  
  }
  const clickLive = () => {
    if (localStorage.getItem("class")){
      document.getElementById(localStorage.getItem("class")).classList.remove("classItem--active");
    }
    document.getElementById("live").classList.add("classItem--active");
    localStorage.setItem("class","live");  

  }
  const clickIn = () => {
    if (localStorage.getItem("class")){
      document.getElementById(localStorage.getItem("class")).classList.remove("classItem--active");
    }
    document.getElementById("in").classList.add("classItem--active");
    localStorage.setItem("class","in");  
  }
  const clickTraffic = () => {
    if (localStorage.getItem("class")){
      document.getElementById(localStorage.getItem("class")).classList.remove("classItem--active");
    }
    document.getElementById("traffic").classList.add("classItem--active");
    localStorage.setItem("class","traffic");  
  }
  const clickPlay = () => {
    if (localStorage.getItem("class")){
      document.getElementById(localStorage.getItem("class")).classList.remove("classItem--active");
    }
    document.getElementById("play").classList.add("classItem--active");
    localStorage.setItem("class","play");  
  }
  const clickElse = () => {
    if (localStorage.getItem("class")){
      document.getElementById(localStorage.getItem("class")).classList.remove("classItem--active");
    }
    document.getElementById("else").classList.add("classItem--active");
    localStorage.setItem("class","else");  
  }

  return(
    <div className="classes">
      <div className="row d-flex">
        <div className="col-lg col-6 class-rwd-l">
          <div id="eat" onClick={clickEat} className="classItem">???</div>
        </div>
        <div className="col-lg col-6">
          <div id="clothes" onClick={clickClothes} className="classItem">???</div>
        </div>
        <div className="col-lg col-4 class-rwd-l">
          <div id="live" onClick={clickLive} className="classItem">???</div>
        </div>
        <div className="col-lg col-4 class-rwd-c">
          <div id="in" onClick={clickIn} className="classItem classItem-in">???</div>
        </div>
        <div className="col-lg col-4">
          <div id="traffic" onClick={clickTraffic} className="classItem">???</div>
        </div>
        <div className="col-lg col-6 class-rwd-l">
          <div id="play" onClick={clickPlay} className="classItem">???</div>
        </div>
        <div className="col-lg col-6">
          <div id="else" onClick={clickElse} className="classItem">???</div>
        </div>
      </div>
    </div>
  );
}