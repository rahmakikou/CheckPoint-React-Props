import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';


const Author=({el})=>{
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.URL} style={{width:250, height:200}} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          {el.team}
          <br/> 
          <br/>
          {el.jerseyNumber} 
          <br/>
          <br/>
          {el.age} 
        </Card.Text>
        <Button className='boutton' variant="primary">Know More</Button>
      </Card.Body>
    </Card>
    )
}

Author.defaultProps={
    el : {
        name : "JK Rowling",
        team : "UK",
        nationality : "British",
        jerseyNumber :  6,
        age : 55,
        URL : "https://www.babelio.com/users/AVT_J-K-Rowling_4279.jpg"
    }
}

Author.propTypes = {

    el: PropTypes.object
}
export default Author 