import React from 'react';
import {useState} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router';

type BillingCycle = 'monthly' | 'yearly';

import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { Email } from '@mui/icons-material';

const stripePromise = loadStripe("pk_test_qblFNYngBkEdjEZ16jxxoWSM"); 
const MinimalCheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    plan: 'starter',
    billingCycle: 'monthly',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    // ✅ Tokenize card
    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      console.error(error);
      alert(error.message);
      setLoading(false);
      return;
    }

    // ✅ Send form + token to backend
    try {
      const res = await fetch('/api/checkout/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          stripeToken: token?.id,
        }),
      });

      if (res.ok) {
        alert('Subscription started successfully!');
        // Optionally redirect to success page
      } else {
        alert('Payment failed.');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-4">
      <h2 className="text-2xl font-semibold text-center">Start Subscription</h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded"
      />

      <input
        type="text"
        name="organization"
        placeholder="Organization Name"
        value={formData.organization}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 border border-gray-300 rounded"
      />

      <select
        name="plan"
        value={formData.plan}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded"
      >
        <option value="starter">Starter</option>
        <option value="pro">Pro</option>
        <option value="enterprise">Enterprise</option>
      </select>

      <select
        name="billingCycle"
        value={formData.billingCycle}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded"
      >
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      {/* Stripe Card Input */}
      <div className="border border-gray-300 rounded p-3">
        <CardElement options={{ hidePostalCode: true }} />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        disabled={loading || !stripe}
      >
        {loading ? 'Processing...' : 'Subscribe'}
      </button>
    </form>
  );
};


const ZohoCheckoutIframe: React.FC = () => {
  const location = useLocation();
  const workspace = location.state?.workspace;
  const formData = {
      fullName: 'John',
      email: 'asad@email.com',
      organization: 'My Organization'
  }
  return (
    <div>
      <h1 className="text-2xl">Checkout for: {workspace}</h1>
    <iframe
      width="768"
      height="998"
      src={`https://billing.zohosecure.com/subscribe/15a7a22bc4f220d1f80fd0d84833c97d7906f5e6327bed22ad482bf477cf719e/Starter_month?first_name=${encodeURIComponent(formData.fullName)}&last_name=Doe&email=${encodeURIComponent(formData.email)}&company_name=${encodeURIComponent(formData.organization)}`}
      style={{ border: 'none' }}
      title="Checkout"
      allowFullScreen
    /></div>
  );
  // return (
  // <div style={{ padding: '2rem' }}>
  //   <Elements stripe={stripePromise}>
  //     <MinimalCheckoutForm/></Elements>
  //   </div>);
};

export default ZohoCheckoutIframe;
