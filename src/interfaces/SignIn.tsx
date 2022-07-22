
import Logo from '../assets/logo_primary.svg';
import { VStack, Heading, Icon, useTheme } from 'native-base';
import { useState } from 'react';

import { Input } from './../components/Input';
import { Button } from './../components/Button';

import { Envelope, Key } from "phosphor-react-native";


// Componentes começam com letra maiúscula
export function SignIn(){
// Precisa ter um retorno que aparecerá na tela
    const {colors} = useTheme();
    const [name, setName] = useState('');
    const [senha, setSenha] = useState('');
    
    function handleSignIn(){
        console.log(name, senha);
    }
    
    return(
        // Retorna apenas um elemento - precisa ser embrulhado numa tag
        // VStack empilha verticalmente
        // Pq não consigo importar como <Logo />
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
                    
             <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
                Acesse sua conta
             </Heading> 
             
             <Input 
                marginBottom={4}
                placeholder="E-mail" 
                InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
                onChangeText={setName}
             />

            <Input 
                mb={8}
                placeholder="Senha" 
                InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
                onChangeText={setSenha}
                secureTextEntry
             />           
            
        <Button title="Entrar" w="full" onPress={handleSignIn}/>
              
        </VStack>
    )

}


