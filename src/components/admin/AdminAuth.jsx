import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../../lib/supabase';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiLock, FiMail, FiEye, FiEyeOff, FiAlertTriangle } = FiIcons;

const AdminAuth = ({ onAuthSuccess }) => {
  const [email, setEmail] = useState('vitmag@gmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      console.log('Attempting login with:', { email });
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Supabase auth error:', error);
        throw error;
      }

      if (data.user) {
        console.log('Login successful:', data.user);
        onAuthSuccess(data.user);
      } else {
        throw new Error('No user data returned');
      }
    } catch (error) {
      console.error('Login error:', error);
      
      // Provide more helpful error messages
      if (error.message.includes('Invalid login credentials')) {
        setError('Invalid email or password. Make sure you have created the admin user in Supabase with email: vitmag@gmail.com and password: Chernivtsi_23');
      } else if (error.message.includes('Email not confirmed')) {
        setError('Email not confirmed. Please check your email or confirm the user in Supabase dashboard.');
      } else if (error.message.includes('fetch') || error.name === 'TypeError') {
        setError('Connection error. Supabase configuration may be incorrect. Please check your credentials.');
      } else {
        setError(error.message || 'Login failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <SafeIcon icon={FiLock} className="w-8 h-8 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
          <p className="text-gray-600">Access FoodAgri AI Admin Panel</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <SafeIcon icon={FiMail} className="w-4 h-4 inline mr-2" />
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              placeholder="vitmag@gmail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <SafeIcon icon={FiLock} className="w-4 h-4 inline mr-2" />
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="Chernivtsi_23"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <SafeIcon icon={showPassword ? FiEyeOff : FiEye} className="w-5 h-5" />
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Secure admin access for FoodAgri AI content management
          </p>
        </div>

        <div className="mt-6 bg-blue-50 rounded-xl p-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Setup Instructions:</p>
          <ol className="text-xs text-gray-600 space-y-1">
            <li>1. Go to your Supabase dashboard</li>
            <li>2. Go to Authentication → Users</li>
            <li>3. Click "Add User" and create:</li>
            <li>   • Email: vitmag@gmail.com</li>
            <li>   • Password: Chernivtsi_23</li>
            <li>4. Make sure to confirm the user</li>
          </ol>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminAuth;