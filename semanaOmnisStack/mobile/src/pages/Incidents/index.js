import React, {useState,useEffect} from 'react';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api'

import logoImg from '../../assets/logo.png'

import style from './style';

export default function Incidents(){
    const [incidents, setIncidents] = useState([]);
    const navigation = useNavigation();

    function navigateToDetail(){
        navigation.navigate('Detail');
    }

    async function loadIncidents(){
        const response = await api.get('incidents');

        setIncidents(response.data);
    }


    useEffect(() => {
        loadIncidents();
    }, []);


    return(
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logoImg} />
                <Text style={style.headerText}>
                    Total de <Text style={style.headerTextBold}>0 casos</Text>
                </Text>
            </View>

            <Text style={style.title}>Bem-vindo!</Text>
            <Text style={style.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <FlatList 
            
            data={[incidents]}
            style={style.incidentsList}
            keyExtractor={incident => String(incident.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: incident }) => (
                <View style={style.incident}>
                <Text style={style.incidentProperty}>ONG:</Text>
                <Text style={style.incidentValue}>{incident.nome}</Text>

                <Text style={style.incidentProperty}>CASO:</Text>
                <Text style={style.incidentValue}>{incident.title}</Text>

                <Text style={style.incidentProperty}>VALOR:</Text>
                <Text style={style.incidentValue}>{incident.value}</Text>

                <TouchableOpacity style={style.detailsButton}
                 onPress={navigateToDetail}
                 >
                     <Text style={style.detailsButtonText}>Ver mais detalhes</Text>
                     <Feather name="arrow-right" size={16} color="#E02041"/>
                 </TouchableOpacity>
            </View>

            )}
            />
        </View>
   
    );
}