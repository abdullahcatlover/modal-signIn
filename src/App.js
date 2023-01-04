import {useState} from 'react'
import Modal from "./components/modal/Modal";
import {data} from "./components/modal/data"
import "./App.scss"




function App() {

   const [showModal, setShowModal] = useState(false);

   const handleClick =()=> {
    setShowModal(true)
   }

   const handleCloseModal =(e)=> {
    e.stopPropagation(); 

    if(e.target.classList.contains("cm")) {
      setShowModal(false)
    }
   
   }


  return (
    <>
     <section className="intro-section --100vh --flex-center">
          <div className="intro --center-all">
               {
                data.map((picture) => {
                  return (
                    <div key={picture.id}>
                        <img src={picture.img} alt="img"/>
                        
                        <h1 className="--text-light --text-md">login</h1>
                        <button onClick={handleClick}
                         className="--btn --btn-secondary
                          --center-all --mb2"
                          >login
                        </button>
                    </div>
                  )
                })
               }
          </div>
     </section>

     {
      showModal && <Modal onCloseModal={handleCloseModal}/>
     }
     </>
  );
}

export default App;
