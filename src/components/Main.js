import styles from './Main.module.css'
import {Component} from 'react'

// function Main(){
//     return(
//         <main className={style.myMain}>Main</main>
//     );
// }

// export default Main;

class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props);
        const{children} = this.props;
        
        return(  

            <div main className={styles.myMain}>
                {children}
            </div>

            // <ul main className={styles.myMain}>
            //     <li>{children}</li>
            // </ul>   
                 
        );
    }
}

export default Main;


