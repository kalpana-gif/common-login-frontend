// src/auth/useAuth.ts
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

export const useAuth = () => useContext(AuthContext);
