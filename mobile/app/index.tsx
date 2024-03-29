/* eslint-disable prettier/prettier */
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { api } from '../src/assets/lib/api';
import NLWLogo from '../src/assets/nlw-spacetime-logo.svg';

const discovery = {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
    revocationEndpoint: 'https://github.com/settings/connections/applications/1f2d3a4ceff1378f9de3',
};

export default function App() {
    const router = useRouter()


    const [, response, signInWithGithub] = useAuthRequest(
        {
            clientId: '1f2d3a4ceff1378f9de3',
            scopes: ['identity'],
            redirectUri: makeRedirectUri({
                scheme: 'nlwspacetime'
            }),
        },
        discovery
    )

    async function handleGithubOAuthCode(code: string) {
        const response = await api.post('/register', {
            code,
        })

        const { token } = response.data

        await SecureStore.setItemAsync('token', token)

        router.push('/memories')
    }


    useEffect(() => {
        if (response?.type === 'success') {
            const { code } = response.params;
            handleGithubOAuthCode(code)
        }
    }, [response]);


    return (
        <View
            className="flex-1 items-center px-8 py-10"
        >

            <View className="flex-1 items-center justify-center gap-6 px-8 py-10">
                <NLWLogo />

                <View className='space-y-2'>
                    <Text className='text-center font-title text-2xl leading-tight text-gray-50'> Your time capsule</Text>
                    <Text className='text-center font-body text-base leading-relaxed text-gray-100'>
                        Collect memorable moments from your journey and share (if you like)
                        with the world!
                    </Text>
                </View>

                <TouchableOpacity activeOpacity={0.7} onPress={() => signInWithGithub()}
                    className='rounded-full bg-green-500 px-5 py-2'
                >
                    <Text className='font alt text-sm uppercase text-black'> REGISTER MEMORY</Text>
                </TouchableOpacity>
            </View>

            <Text className='text-center font-body text-sm leading-relaxed text-gray-200'> Made with 💜 in Rocketseat's NLW</Text>
            <StatusBar style="light" translucent />
        </View>
    )
}
