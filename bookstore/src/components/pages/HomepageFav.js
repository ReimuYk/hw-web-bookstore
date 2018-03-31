import React, {Component} from 'react';
import { List, Card } from 'antd';
const { Meta} = Card;

const data = [
  {
    title: 'book1',
    description: 'description of book1'
  },
  {
    title: 'book2',
    description: 'description of book2'
  },
  {
    title: 'book3',
    description: 'description of book3'
  },
  {
    title: 'book4',
    description: 'description of book4'
  },
  {
    title: 'book5',
    description: 'description of book5'
  },
  {
    title: 'book6',
    description: 'description of book6'
  }
    
];

class Favorite extends Component{
    render(){
        return (
            <div style={{width:1300,margin:'auto'}}>
            <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta
                    title={item.title}
                    description={item.description}
                    />
                </Card>
              </List.Item>
                )}
            />
            </div>
        )
    }
}

export default Favorite;