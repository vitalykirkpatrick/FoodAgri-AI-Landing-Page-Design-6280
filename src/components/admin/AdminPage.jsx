import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import AdminAuth from './AdminAuth';
import AdminDashboard from './AdminDashboard';
import SEOHead from '../SEO/SEOHead';

const AdminPage = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
      setIsLoading(false);
    };

    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => subscription?.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title="Admin Panel - FoodAgri AI"
        description="Secure admin access for FoodAgri AI content management"
        canonical="https://foodagriai.com/admin"
      />
      {user ? (
        <AdminDashboard user={user} onLogout={handleLogout} />
      ) : (
        <AdminAuth onAuthSuccess={setUser} />
      )}
    </>
  );
};

export default AdminPage;