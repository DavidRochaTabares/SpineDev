import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff, LogIn } from 'lucide-react';
import { getCRMService } from '../../services/crmService';

interface CRMLoginProps {
  language?: 'es' | 'en';
}

export default function CRMLogin({ language = 'es' }: CRMLoginProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const t = {
    es: {
      title: 'SpineDev CRM',
      subtitle: 'Panel de gestión de leads',
      placeholder: 'Contraseña',
      button: 'Acceder',
      error: 'Contraseña incorrecta',
      serverError: 'Error del servidor. Intenta de nuevo.'
    },
    en: {
      title: 'SpineDev CRM',
      subtitle: 'Lead management panel',
      placeholder: 'Password',
      button: 'Access',
      error: 'Incorrect password',
      serverError: 'Server error. Try again.'
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const crmService = getCRMService();
      const isValid = crmService.authenticate(password);

      if (isValid) {
        window.location.href = '/crm/dashboard';
      } else {
        setError(t[language].error);
      }
    } catch (err) {
      setError(t[language].serverError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      {/* Animaciones de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/spinedev logo horizontal azul.png" 
              alt="SpineDev" 
              className="h-10 w-auto dark:hidden" 
            />
            <img 
              src="/Spinedev logo horizontal blanco.png" 
              alt="SpineDev" 
              className="h-10 w-auto hidden dark:block" 
            />
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
              <Lock className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {t[language].title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {t[language].subtitle}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t[language].placeholder}
                  className="w-full px-4 py-3 pr-12 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  required
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 text-sm"
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading || !password}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white rounded-xl font-semibold transition-all duration-200 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>{language === 'es' ? 'Verificando...' : 'Verifying...'}</span>
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  <span>{t[language].button}</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
          {language === 'es' ? 'Acceso restringido solo para personal autorizado' : 'Restricted access for authorized personnel only'}
        </p>
      </motion.div>
    </div>
  );
}
