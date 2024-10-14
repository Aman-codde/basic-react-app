import AboutPage from '../about/about';

export default function Home(){
    let content;
    let isLoggedIn = true;
    if(isLoggedIn){
        content = <AboutPage/>;
    }
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Sign In form</h1>
            <label>Username </label>
            <input type="text"></input>
            <br/><br/>
            <label>Password </label>
            <input type="text"></input>
            <br/><br/>
            <button>Submit</button>
            {content}
        </div>
    )
}