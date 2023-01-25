import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'
function App(){
    return(
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal digital asistant</p>
                </div>
            </section>
            <div>
                <div className='container'>
                    <section className='section'>
                        <div className='columns'>
                            <div className='column is-4'>
                                <ProfileCard 
                                title="Alexa" 
                                handle="@alexa99" 
                                image={AlexaImage}
                                description="Alexa is a Amazon app and helps you buy things"/>
                            </div>
                            <div className='column is-4'>
                                <ProfileCard 
                                title="Cortana" 
                                handle="@cortana45" 
                                image={CortanaImage}
                                description="Cortana is a microsoft app and helps to search"/>
                            </div>
                            <div className='column is-4'>
                                <ProfileCard 
                                title="Siri" 
                                handle="@siri8" 
                                image={SiriImage}
                                description="Siri is a apple app and is out of bussiness"/>
                            </div>
                        </div>
                    </section>
                </div>
                
                
               
            </div>
        </div>
    );
}
export default App;