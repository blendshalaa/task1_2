import './App.css'
import Card from './components/Card'
import img from '../src/assets/kevin.avif'

function App() {
    return (
        <div className='main'>
            <div className='cards-container'>
                <Card 
                    date='3.3.0(14/05/2018)' 
                    button1='New'
                    button1color='#00FF00'
                    profilepic={img} 
                    name='Kevin Joe' 
                    subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
                    downloadbtn='Download'
                />
                <Card 
                    date='3.3.0(14/05/2018)' 
                    button1='Fix' 
                 
                    profilepic={img} 
                    name='Kevin Joe' 
                    subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
                    downloadbtn='Download'
                />
                <Card 
                    date='3.3.0(14/05/2018)' 
                    button1='Improvement' 
                    button1color="#FF779E"
                    profilepic={img} 
                    name='Kevin Joe' 
                    subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
                    downloadbtn='Download'
                />
                <Card 
                    date='3.3.0(14/05/2018)' 
                    button1='New' 
                    button1color='#00FF00'
                    profilepic={img} 
                    name='Kevin Joe' 
                    subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
                    downloadbtn='Download'
                />
                <Card 
                    date='3.3.0(14/05/2018)' 
                    button1='Fix' 
                    profilepic={img} 
                    name='Kevin Joe' 
                    subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
                    downloadbtn='Download'
                />
                <Card 
                    date='3.3.0(14/05/2018)' 
                    button1='Improvement' 
                       button1color="#FF779E"
                    
                    profilepic={img} 
                    name='Kevin Joe' 
                    subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
                    downloadbtn='Download'
                />
            </div>
        </div>
    )
}

export default App
