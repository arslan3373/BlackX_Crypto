import React, { useState } from 'react';
import { Copy, Loader2 } from 'lucide-react';

import background from '../img/Map.png'; // Background image
import leftSideImage from '../img/WhatsApp Image 2025-08-13 at 11.57.32.jpeg'; // Login category image
import logo from '../img/unnamed.webp';

export default function CryptoPaymentForm() {
  const [walletAddress, setWalletAddress] = useState('');
  const [selectedNetwork, setSelectedNetwork] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const networks = [
    { value: 'BTC', label: 'Bitcoin (BTC)', icon: '₿' },
    { value: 'ETH', label: 'Ethereum (ETH)', icon: 'Ξ' },
    { value: 'USDT', label: 'Tether (USDT)', icon: '₮' }
  ];

  const handlePasteAddress = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setWalletAddress(text);
    } catch (err) {
      console.error('Failed to read clipboard:', err);
    }
  };

  const handleProcessPayment = async (e) => {
    e.preventDefault();
    
    if (!walletAddress || !selectedNetwork || !amount) {
      alert('Please fill in all fields');
      return;
    }
    
    setLoading(true);
    
    try {
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        alert('Payment processed successfully!');
      }, 2000);
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
      setLoading(false);
    }
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Only allow numbers and decimal point
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0 flex flex-wrap items-center justify-center gap-0">
          <img src={background} alt="" className="object-cover w-full h-full" />
          <div className="absolute inset-0 z-10 bg-gray-800 opacity-40"></div>
          <div className="relative z-20"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
          <div className="flex flex-col items-center justify-center gap-6 mx-auto rounded-[20px]  md:flex-row md:gap-0 max-w-6xl w-full">
     
            <div className='hidden md:flex h-[572px] justify-center items-center  bg-black rounded-l-[20px]'>
              <img src={leftSideImage} className=" w-full md:w-[550px] h-full rounded-l-[20px]" alt="Category" />
            </div>

            <div className="p-6 md:p-10 flex min-h-[500px] bg-white md:h-[572px] flex-col justify-between  w-full md:max-w-[416px] rounded-[20px] md:rounded-[17px] md:rounded-l-none">
              <div>
                <h1 className="flex justify-center pb-4 text-2xl font-bold font-krona md:justify-start text-headings">
                  <img src={logo} className="w-10 h-12 md:h-16 md:w-14" alt="Profile" />
                </h1>
                <h1 className="mt-1 mb-3 text-lg font-bold md:text-xl font-krona">Send Crypto Payment</h1>
                <hr />

                <div className="relative mt-4">
                  <h1 className="mt-1 text-lg font-bold md:text-xl font-krona">Wallet Address</h1>
                  <input
                    type="text"
                    placeholder="Wallet Address"
                    className="w-full p-3 pr-12 text-sm bg-gray-100 border rounded-md md:text-base"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                  />
                  <button
                    onClick={handlePasteAddress}
                    className="absolute text-gray-500 transition-colors transform -translate-y-1/2 right-3 top-[55px] hover:text-blue-600"
                    title="Paste from clipboard"
                  >
                    <Copy className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>

                <div className="relative mt-4">
                  <h1 className="mt-1 text-lg font-bold md:text-xl font-krona">Select Network</h1>
                  <select
                    className="w-full p-3 text-sm bg-gray-100 border rounded-md appearance-none cursor-pointer md:text-base"
                    value={selectedNetwork}
                    onChange={(e) => setSelectedNetwork(e.target.value)}
                  >
                    <option value="">Select Network</option>
                    {networks.map((network) => (
                      <option key={network.value} value={network.value}>
                         {network.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute transform -translate-y-1/2 pointer-events-none right-3 top-[50px]">
                    <svg className="w-4 h-4 text-gray-400 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>

                {/* Enter Amount Input */}
                <h1 className="mt-4 text-lg font-bold md:text-xl font-krona">Enter Amount</h1>
                <input
                  type="text"
                  placeholder="Enter Amount"
                  className="w-full p-3 mt-1 text-sm bg-gray-100 border rounded-md md:text-base"
                  value={amount}
                  onChange={handleAmountChange}
                />
              </div>
              
              <button
                className="flex items-center justify-center w-full gap-2 py-3 mt-6 text-sm font-medium text-white bg-black rounded-md disabled:bg-opacity-70 md:text-base"
                type="submit"
                onClick={handleProcessPayment}
                disabled={loading || !walletAddress || !selectedNetwork || !amount}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Process Payment'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}