import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { uploadBytes, ref, storage, getDownloadURL, setDoc, doc, db, auth, onAuthStateChanged } from "../configs/Firebase"
const Map = ({ navigation }) => {
    const [name, setname] = useState('');
    const [currentUser, setcurrentUser] = useState('');
    const [fathername, setfathername] = useState('');
    const [cnic, setcnic] = useState('');
    const [dob, setdob] = useState('');
    const [nooffamily, setnooffamily] = useState('');
    const [checked, setChecked] = useState('');
    const [monthlyIncome, setmonthlyIncome] = useState('');
    const [image, setImage] = useState(false);
    const [submit, setsubmit] = useState("Submit Request");
    const [text, settext] = useState("Upload Your Cnic Image");
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setcurrentUser(user.uid)
        }
      });
    const submitRequest = async () => {
        const uid = new Date().getTime().toString();
        setsubmit("Submitting Request ...")
        if (name && fathername && cnic && dob && nooffamily && checked) {
            const Data = {
                name,
                fathername,
                cnic,
                dob,
                nooffamily,
                checked,
                uid,
                currentUser,
            }
            let storageRef = ref(storage, `Cnic/${image.data.name}`)
            if (image !== false) {
                try {
                    await uploadBytes(storageRef, image)
                    let url = await getDownloadURL(storageRef)
                    Data[`Cnicurl`] = url
                    let userRef = doc(db, 'FoodRequests', uid)
                    await setDoc(userRef, Data)
                    setsubmit("Submitted Request !")
                    settext("Upload Your CNIC Image")
                    setImage(false)
                    navigation.navigate('Food Requests')
                } catch (er) {
                    alert(er);
                    setsubmit("Submit Request")
                }
            }
            else {
                setsubmit("Submit Request")
                alert("Upload Image And try Again")
            }
        }
        else {
            setsubmit("Submit Request")
            alert('Please fill all fields and try again')
        }
    }
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                const response = await fetch(result.uri)
                const blob = await response.blob();
                setImage(blob)
                settext(blob.data.name)
                alert('Image Selected Succuessully')
            }
        } catch (er) {
            alert(er)
        }
    };


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView style={{ paddingHorizontal: 30 }} showsHorizontalScrollIndicator={false}>
                <View style={{ marginVertical: 20 }}>
                    <Text style={{ fontSize: 35, textAlign: 'center', color: '#00008B' }}>
                        Request Food
                    </Text>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <TextInput
                        label="Name"
                        value={name}
                        style={{ width: 300 }}
                        onChangeText={text => setname(text)}
                    />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <TextInput
                        label="Father Name"
                        value={fathername}
                        style={{ width: 300 }}
                        onChangeText={text => setfathername(text)}
                    />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <TextInput
                        label="CNIC"
                        value={cnic}
                        style={{ width: 300 }}
                        onChangeText={text => setcnic(text)}
                    />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <TextInput
                        label="Date of Birth"
                        value={dob}
                        style={{ width: 300 }}
                        onChangeText={text => setdob(text)}
                    />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <TextInput
                        label="Number of Family Members"
                        value={nooffamily}
                        style={{ width: 300 }}
                        onChangeText={text => setnooffamily(text)}
                    />
                </View>
                <View style={{ marginVertical: 10 }}>
                    <TextInput
                        label="Monthly Income"
                        value={monthlyIncome}
                        style={{ width: 300 }}
                        onChangeText={text => setmonthlyIncome(text)}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginHorizontal: 10 }}>
                        <RadioButton
                            status={checked === 'Monthly Ration' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('Monthly Ration')}
                        />
                        <Text>Monthly Ration</Text>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <RadioButton
                            value="Daily 1"
                            status={checked === 'Daily 1' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('Daily 1')}
                        />
                        <Text>Daily 1</Text>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <RadioButton
                            value="Daily 2"
                            status={checked === 'Daily 2' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('Daily 2')}
                        />
                        <Text>Daily 2</Text>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <RadioButton
                            value="Daily 3"
                            status={checked === 'Daily 3' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('Daily 3')}
                        />
                        <Text>Daily 3</Text>
                    </View>
                </View>
                <Button style={{ marginTop: 20 }} mode='contained' onPress={pickImage}>
                    {text}
                </Button>
                <Button onPress={submitRequest} style={{ marginVertical: 20 }} mode="contained">
                    {submit}
                </Button>
            </ScrollView>
        </View>
    )
}
export default Map;