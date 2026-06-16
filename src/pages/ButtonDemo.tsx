import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Download, Send, Trash2, Heart } from 'lucide-react';

export default function ButtonDemo() {
  const [loadingStates, setLoadingStates] = useState({
    primary: false,
    secondary: false,
    outline: false,
    danger: false,
    withIcon: false,
  });

  const handleLoadingToggle = (key: keyof typeof loadingStates) => {
    setLoadingStates((prev) => ({
      ...prev,
      [key]: true,
    }));
    setTimeout(() => {
      setLoadingStates((prev) => ({
        ...prev,
        [key]: false,
      }));
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Button Component Demo</h1>
        <p className="text-gray-400 mb-12">
          Enhanced button component with loading state, spinner, and disabled state
        </p>

        {/* Primary Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Primary Variant</h2>
          <div className="space-y-4 bg-gray-800 p-6 rounded-lg">
            <div className="flex gap-4 items-center">
              <Button
                variant="primary"
                onClick={() => handleLoadingToggle('primary')}
                loading={loadingStates.primary}
              >
                Submit Form
              </Button>
              <span className="text-gray-400 text-sm">
                {loadingStates.primary ? 'Loading...' : 'Click to show loading state'}
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <Button variant="primary" size="lg" loading={loadingStates.primary}>
                Large Button
              </Button>
            </div>
            <div className="flex gap-4 items-center">
              <Button
                variant="primary"
                size="sm"
                loading={loadingStates.primary}
              >
                Small Button
              </Button>
            </div>
          </div>
        </section>

        {/* Secondary Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Secondary Variant</h2>
          <div className="space-y-4 bg-gray-800 p-6 rounded-lg">
            <div className="flex gap-4 items-center">
              <Button
                variant="secondary"
                onClick={() => handleLoadingToggle('secondary')}
                loading={loadingStates.secondary}
              >
                Secondary Action
              </Button>
              <span className="text-gray-400 text-sm">
                {loadingStates.secondary ? 'Processing...' : 'Click to simulate action'}
              </span>
            </div>
          </div>
        </section>

        {/* Outline Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Outline Variant</h2>
          <div className="space-y-4 bg-gray-800 p-6 rounded-lg">
            <div className="flex gap-4 items-center">
              <Button
                variant="outline"
                onClick={() => handleLoadingToggle('outline')}
                loading={loadingStates.outline}
              >
                Cancel / Retry
              </Button>
              <span className="text-gray-400 text-sm">
                {loadingStates.outline ? 'Retrying...' : 'Click to retry'}
              </span>
            </div>
          </div>
        </section>

        {/* Danger Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Danger Variant</h2>
          <div className="space-y-4 bg-gray-800 p-6 rounded-lg">
            <div className="flex gap-4 items-center">
              <Button
                variant="danger"
                onClick={() => handleLoadingToggle('danger')}
                loading={loadingStates.danger}
              >
                Delete Item
              </Button>
              <span className="text-gray-400 text-sm">
                {loadingStates.danger ? 'Deleting...' : 'Click to delete'}
              </span>
            </div>
          </div>
        </section>

        {/* Buttons with Icons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">With Icons</h2>
          <div className="space-y-4 bg-gray-800 p-6 rounded-lg">
            <div className="flex gap-4 items-center">
              <Button
                icon={<Download size={16} />}
                variant="primary"
                onClick={() => handleLoadingToggle('withIcon')}
                loading={loadingStates.withIcon}
              >
                Download
              </Button>
              <span className="text-gray-400 text-sm">
                {loadingStates.withIcon ? 'Downloading...' : 'Click to download'}
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <Button
                icon={<Send size={16} />}
                variant="secondary"
                loading={loadingStates.withIcon}
              >
                Send
              </Button>
            </div>
            <div className="flex gap-4 items-center">
              <Button
                icon={<Trash2 size={16} />}
                variant="danger"
                loading={loadingStates.danger}
              >
                Remove
              </Button>
            </div>
          </div>
        </section>

        {/* Full Width Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Full Width</h2>
          <div className="space-y-4 bg-gray-800 p-6 rounded-lg">
            <Button variant="primary" fullWidth loading={loadingStates.primary}>
              Full Width Primary
            </Button>
            <Button variant="secondary" fullWidth loading={loadingStates.secondary}>
              Full Width Secondary
            </Button>
          </div>
        </section>

        {/* Features Showcase */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <div className="bg-gray-800 p-6 rounded-lg space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>✅ <strong>Loading State</strong> - Toggle with `loading` prop</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>✅ <strong>Animated Spinner</strong> - Spinning loader icon from lucide-react</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>✅ <strong>Auto-Disabled</strong> - Button automatically disabled while loading</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>✅ <strong>Preserved Functionality</strong> - All variants, sizes, and styling work perfectly</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>✅ <strong>Animations Disabled</strong> - Framer motion animations pause while loading</p>
            </div>
          </div>
        </section>

        {/* Usage Example */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Usage Example</h2>
          <div className="bg-gray-800 p-6 rounded-lg overflow-auto">
            <pre className="text-gray-300 text-sm">
{`import { Button } from '@/components/ui/Button';
import { useState } from 'react';

export function MyComponent() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await submitForm();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="primary"
      size="lg"
      loading={loading}
      onClick={handleSubmit}
    >
      Submit
    </Button>
  );
}`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
