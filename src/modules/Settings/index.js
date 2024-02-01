import React, {useState} from "react";
import { Form, Input, Card, Button } from "antd"
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng,} from 'react-google-places-autocomplete';

const Settings = () => {
    const [address, setAddress] = useState(null)
    const [coordinates, setCoordinates] = useState(null)

    const getAddressLatLng = async (address) =>{
        setAddress(address);
        const geocodedByAddress = await geocodeByAddress(address.label)
        const latLng = await getLatLng(geocodedByAddress[0])
        setCoordinates(latLng)
    }

  return (
    <Card title="Restaurant Details" style={{margin:20}}>
        <Form layout="vertical" wrapperCol={{span:12}}>
            <Form.Item label="Restaurant Name" required>
                <Input placeholder="Enter Restaurant Name"/>
            </Form.Item>
            <Form.Item label="Restaurant Address" required>
                <GooglePlacesAutocomplete
                apiKey='AIzaSyADZ3-4KsXIvtIzbN_pqUEPq14npw6XnHY'
                selectProps={{
                    value:address,
                    onChange: getAddressLatLng
                }}/>
            </Form.Item>
            <Form.Item style={{marginTop:30}}>
                <Button type="primary">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        <span>{coordinates?.lat}-{coordinates?.lng}</span>
    </Card>
  )
}

export default Settings