import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';


export default function Incidents() {
    const navigation = useNavigation();


    // go to the next page in apk
    function navigateToDetail() {
        navigation.navigate('Details');
    }

    async function loadIncidents() {
        if (loading) {
            return;
        }

        if (total > 0 && incidents.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get("incidents", {
            params: { page }
        });

        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers["x-total-count"]);
        setPage(page + 1);
        setLoading(false);

        useEffect(() => {
            loadIncidents();
        }, []);

    }

    return (
        <View style={styles.container}> 
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>
                Escolha um dos casos abaixo e salve o dia
            </Text>


            <FlatList
            
                data={[1,2,3]}
                style={styles.incidentList}
                keyExtractor={incident => String(incident)}

                //showsVerticalScrollIndicator={false}

                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}

                renderItem={() => (
                   
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}> ONG: </Text>
                        <Text style={styles.incidentValue}> APAD: </Text>
                    
                        <Text style={styles.incidentProperty}> CASO: </Text>
                        <Text style={styles.incidentValue}> Cadelinha atropelada: </Text>
                    
                        <Text style={styles.incidentProperty}> VALOR: </Text>
                        <Text style={styles.incidentValue}> R$ 120,00 </Text>
                            
                        <TouchableOpacity 
                            style={styles.detailsButton}
                            onPress={navigateToDetail}
                        > 

                        <Text style={styles.detailButtonText}> Ver mais detalhes </Text>
                        <Feather name="arrow-right" size={16} color="#E02041" />

                        </TouchableOpacity>

                    </View>
                )}
            />
        </View>
    );
}