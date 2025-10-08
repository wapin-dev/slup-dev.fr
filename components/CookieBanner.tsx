'use client'

import { useState, useEffect } from 'react'
import { X, Cookie, Shield, BarChart3 } from 'lucide-react'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    } else if (consent === 'accepted') {
      enableAnalytics()
    }
  }, [])

  const enableAnalytics = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      })
    }
  }

  const disableAnalytics = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      })
    }
  }

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    enableAnalytics()
    setShowBanner(false)
  }

  const rejectAll = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    disableAnalytics()
    setShowBanner(false)
  }

  const acceptSelected = () => {
    localStorage.setItem('cookie-consent', 'partial')
    // Ici vous pouvez gérer les cookies sélectionnés
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Gestion des cookies</h3>
                  <p className="text-sm text-gray-600">Respectons votre vie privée</p>
                </div>
              </div>
              <button
                onClick={() => setShowBanner(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!showDetails ? (
              <>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site et analyser notre trafic. 
                  Certains cookies sont essentiels au fonctionnement du site, d'autres nous aident à comprendre comment vous l'utilisez.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptAll}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Accepter tous les cookies
                  </button>
                  <button
                    onClick={rejectAll}
                    className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Refuser les cookies
                  </button>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Personnaliser
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  <div className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-green-600" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Cookies essentiels</h4>
                          <p className="text-sm text-gray-600">Nécessaires au fonctionnement du site</p>
                        </div>
                      </div>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Obligatoire
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <BarChart3 className="w-5 h-5 text-blue-600" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Cookies analytiques</h4>
                          <p className="text-sm text-gray-600">Google Analytics pour améliorer notre site</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptSelected}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
                  >
                    Confirmer mes choix
                  </button>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Retour
                  </button>
                </div>
              </>
            )}

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                En continuant à naviguer, vous acceptez notre{' '}
                <a href="/privacy" className="text-blue-600 hover:underline">politique de confidentialité</a>
                {' '}et nos{' '}
                <a href="/terms" className="text-blue-600 hover:underline">conditions générales d'utilisation</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
