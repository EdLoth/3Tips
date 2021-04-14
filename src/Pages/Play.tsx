import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import styles from '../Styles/Pages/Play.module.css';
 

export default function Play() {
    const history = useHistory();

    function pushHistory(){
        history.push('/index')
    }

    return(
        <div className={styles.containerPlay}>
           <div id={styles.contentPlay} className="container-fluid">
               <h1>3 Dicas</h1>
               <hr/>
               <div id={styles.rowTip} className="row">
                   <div id={styles.tipContent} className="col-6">
                       <Link to="/tip1" id={styles.buttonTip}>Pergunta 1</Link>
                   </div>
                   <div id={styles.tipContent} className="col-6">
                       <Link to="/tip2" id={styles.buttonTip}>Pergunta 2</Link>
                   </div>
               </div>
               
               <div id={styles.rowTip} className="row">
                   <div id={styles.tipContent} className="col-6">
                       <Link to="/tip3" id={styles.buttonTip}>Pergunta 3</Link>
                   </div>
                   <div id={styles.tipContent} className="col-6">
                       <Link to="/tip4" id={styles.buttonTip}>Pergunta 4</Link>
                   </div>
               </div>
               
               <div id={styles.rowTip} className="row">
                   <div id={styles.tipContent} className="col-6">
                       <Link to="/tip5" id={styles.buttonTip}>Pergunta 5</Link>
                   </div>
                   <div id={styles.tipContent} className="col-6">
                       <Link to="/tip6" id={styles.buttonTip}>Pergunta 6</Link>
                   </div>
               </div>
               
               <div id={styles.rowTip} className="row">
                   <div id={styles.tipContent} className="col-6">
                       <Link to="/tip7" id={styles.buttonTip}>Pergunta 7</Link>
                   </div>
                   <div id={styles.tipContent} className="col-6">
                       <Link to="/tip8" id={styles.buttonTip}>Pergunta 8</Link>
                   </div>
               </div>
               
               <div id={styles.rowTip} className="row">
                   <div id={styles.tipContent} className="col-6">
                       <Link to="/tip9" id={styles.buttonTip}>Pergunta 9</Link>
                   </div>
                   <div id={styles.tipContent} className="col-6">
                       <Link to="/tip10" id={styles.buttonTip}>Pergunta 10</Link>
                   </div>
               </div>
               <br/>
               <hr/>
               <button id={styles.btnReturnIndex} onClick={pushHistory} className="btn-outline-success">Pagina Principal</button>
           </div>
        </div>
    )
}