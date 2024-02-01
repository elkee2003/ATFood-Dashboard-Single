import dishes from '../../assets/data/dashboard/dishes.json'
import {Card, Descriptions, Divider, List, Button} from 'antd';
import styles from "./styles"
import { useParams } from 'react-router-dom';

const DetailedOrder = ()=>{
    const {id} = useParams()
    return(
        <Card title={`Order ${id}`} style={{margin:20}}>
            <Descriptions bordered column={{lg:1, md:1, sm:1}}>
                <Descriptions.Item label='Customer'>Linda</Descriptions.Item>
                <Descriptions.Item label='Customer Address'>Ibadan ExpressWay, Nigeria</Descriptions.Item>
            </Descriptions>
            <Divider/>
            <List
            dataSource={dishes}
            renderItem={(dishItem)=>(
                <List.Item >
                <div style={{fontWeight:'bold'}}>{dishItem.name} x{dishItem.quantity}</div>
                <div>₦{dishItem.price}</div>
                </List.Item>
            )}/>
            <Divider/>
            <div style={styles.totalSumContainer}>
                <h2>Total:</h2>
                <h2 style={styles.totalPrices}>₦5000.99</h2>
            </div>
            <Divider/>
            <div style={styles.buttonContainer}>
                <Button block type= 'danger' size='large' style={styles.button}>
                Decline Order
                </Button>
                <Button block type='primary' size='large' style={styles.primaryButton}>
                Accept Order
                </Button>
            </div>
            <Button block type='primary' size='large'>
            Food is Ready
            </Button>
        </Card>
    )
}

export default DetailedOrder;
