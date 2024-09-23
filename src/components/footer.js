import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* --- First Column: Integrations --- */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Integrations</h3>
          <ul className="space-y-2 text-[#353a47] cursor-pointer">
            <li>Shopify</li>
            <li>Etsy</li>
            <li>eBay</li>
            <li>Amazon</li>
            <li>TikTok Shop</li>
            <li>PrestaShop</li>
            <li>BigCommerce</li>
            <li>Wix</li>
            <li>WooCommerce</li>
            <li>Squarespace</li>
            <li>Printify API</li>
            <li>Printify Pop-Up Store</li>
            <li>Shutterstock</li>
          </ul>
        </div>

        {/* --- Second Column: Discover --- */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Discover</h3>
          <ul className="space-y-2 text-[#353a47] cursor-pointer">
            <li>Blog</li>
            <li>Guides</li>
            <li>Products</li>
            <li>Etsy print-on-demand</li>
            <li>Shopify print-on-demand</li>
            <li>Woocommerce print-on-demand</li>
            <li>Wix print-on-demand</li>
            <li>Squarespace print-on-demand</li>
            <li>Make Your Own Shirt</li>
            <li>Brands</li>
            <li>Pricing</li>
            <li>Shipping Rates</li>
            <li>Mockup Generator</li>
          </ul>
        </div>

        {/* --- Third Column: Start Selling --- */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Start Selling</h3>
          <ul className="space-y-2 text-[#353a47] cursor-pointer">
            <li>Custom T-shirts</li>
            <li>Custom Hoodies</li>
            <li>Custom Mugs</li>
            <li>Custom Socks</li>
            <li>Custom Backpacks</li>
            <li>Custom Branding</li>
            <li>Sell on Etsy</li>
            <li>Sell on Social Media</li>
            <li>Free T-shirt Designs</li>
            <li>Custom Products</li>
            <li>Custom All-Over-Print Hoodies</li>
            <li>Start a Clothing Line</li>
            <li>Start POD Business</li>
            <li>Bulk Orders</li>
            <li>Transferring To Printify</li>
          </ul>
        </div>

        {/* --- Fourth Column: More Info --- */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Printify</h3>
          <ul className="space-y-2 text-[#353a47] cursor-pointer">
            <li>Print on Demand</li>
            <li>Print Providers</li>
            <li>Experts Program</li>
            <li>Printify Express Delivery</li>
            <li>Become a Partner</li>
            <li>About</li>
            <li>Printify Quality Promise</li>
            <li>Jobs</li>
            <li>Webinars</li>
            <li>Printing Profits Podcast</li>
            <li>Contact Us</li>
            <li>Affiliate</li>
            <li>Contact Sales</li>
            <li>POD Glossary</li>
            <li>Network Fulfillment Status</li>
            <li>Merchant Protection</li>
            <li>Security</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
