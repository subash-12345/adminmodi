import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

const Last = () => {
  const [data, setData] = useState([]);
  const [maxCount, setMaxCount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`);
        setData(response.data);
        findMaxCount(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const findMaxCount = (data) => {
    if (data.length === 0) return;
    let max = data[0].count;
    for (let i = 1; i < data.length; i++) {
      if (data[i].count > max) {
        max = data[i].count;
      }
    }
    setMaxCount(max + 1);
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className='Pagecontent'>
            <div className="table-responsive">
              <table className="one">
                <thead >
                  <tr>
                    <th className='th'>ID</th>
                    <th className='th'>Title</th>
                    <th className='th'>Image</th>
                    <th className='th'>Content</th>
                    <th className='th'>Logo</th>
                    <th className='th'>Review</th>
                    <th className='th'>Like</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='td'>1</td>
                    <td className='td'>Lifestyle</td>
                    <td className='td'><img src="https://cdn.myhealthteams.com/graphic/624f0875d9e5c82370698a33/wquotes/MHT_DiabetesTeam_Article4_Carousel-ed78ed5eafedbd6441ab653583e9633c.webp?1678758980" className='C1' alt="" /></td>
                    <td className='td'>Life After 65 With Diabetes</td>
                    <td className='td'><img src="https://media.istockphoto.com/id/471629610/vector/caduceus-medical-symbol.jpg?s=1024x1024&w=is&k=20&c=vpQgpAb9OmQFkJYsCmhjlsiO6S68KUiBOukrhQKYwcg=" className="doctor" alt='' /></td>
                    <td className='td'>Medically reviewed by Robert Hurd, M.D.</td>
                    <td className='td'>{maxCount !== null && <p style={{ color: "red", fontWeight: "bold", fontSize: '20px', marginLeft: '10px' }}>{maxCount}</p>}</td>
                  </tr>
                  {/* Add more rows if needed */}
                </tbody>
              </table>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Last;
