import React, { useState } from 'react';

// Types
interface Watch {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

// Sample data
const watches: Watch[] = [
  { id: '1', name: 'Classic Chronograph', brand: 'Timekeeper', price: 1299, image: '/watches/watch1.jpg', isNew: true },
  { id: '2', name: 'Diver Pro 200M', brand: 'Oceanmaster', price: 899, image: '/watches/watch2.jpg', isBestseller: true },
  { id: '3', name: 'Elegant Automatic', brand: 'Prestige', price: 2499, image: '/watches/watch3.jpg' },
  { id: '4', name: 'Pilot Edition', brand: 'Skymaster', price: 1599, image: '/watches/watch4.jpg' },
  { id: '5', name: 'Minimalist Quartz', brand: 'Nordic', price: 599, image: '/watches/watch5.jpg', isNew: true },
  { id: '6', name: 'Skeleton Mechanical', brand: 'Artisan', price: 3299, image: '/watches/watch6.jpg', isBestseller: true },
  { id: '7', name: 'Sports Chronometer', brand: 'Velocity', price: 1899, image: '/watches/watch7.jpg' },
  { id: '8', name: 'Vintage Automatic', brand: 'Heritage', price: 1799, image: '/watches/watch8.jpg' },
  { id: '9', name: 'Classic Leather', brand: 'Timekeeper', price: 899, image: '/watches/watch9.jpg' },
  { id: '10', name: 'Luxury Gold', brand: 'Prestige', price: 4999, image: '/watches/watch10.jpg', isBestseller: true },
  { id: '11', name: 'Smart Hybrid', brand: 'Techron', price: 1299, image: '/watches/watch11.jpg', isNew: true },
  { id: '12', name: 'Ceramic Automatic', brand: 'Artisan', price: 2799, image: '/watches/watch12.jpg' },
  { id: '13', name: 'Field Watch', brand: 'Explorer', price: 799, image: '/watches/watch13.jpg' },
  { id: '14', name: 'GMT Master', brand: 'Skymaster', price: 3499, image: '/watches/watch14.jpg', isBestseller: true },
  { id: '15', name: 'Dress Watch', brand: 'Elegance', price: 1199, image: '/watches/watch15.jpg' },
  { id: '16', name: 'Racing Chronograph', brand: 'Velocity', price: 2199, image: '/watches/watch16.jpg', isNew: true },
  { id: '17', name: 'Military Automatic', brand: 'Tactical', price: 1499, image: '/watches/watch17.jpg' },
  { id: '18', name: 'Dive Titanium', brand: 'Oceanmaster', price: 2899, image: '/watches/watch18.jpg' },
  { id: '19', name: 'Rose Gold Classic', brand: 'Prestige', price: 3799, image: '/watches/watch19.jpg', isBestseller: true },
  { id: '20', name: 'Ultra-thin Quartz', brand: 'Nordic', price: 699, image: '/watches/watch20.jpg' },
  { id: '21', name: 'Moon Phase', brand: 'Heritage', price: 4299, image: '/watches/watch21.jpg', isNew: true },
  { id: '22', name: 'Diamond Bezel', brand: 'Luxe', price: 5999, image: '/watches/watch22.jpg' },
  { id: '23', name: 'Square Case', brand: 'Geometric', price: 1399, image: '/watches/watch23.jpg' },
  { id: '24', name: 'Tourbillon Master', brand: 'Artisan', price: 9999, image: '/watches/watch24.jpg', isBestseller: true },
];

// Filter options
type SortOption = 'featured' | 'price-low' | 'price-high' | 'newest';
type FilterOption = 'all' | 'new' | 'bestseller';

const ViewAllWatchesPage: React.FC = () => {
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [filterBy, setFilterBy] = useState<FilterOption>('all');
  
  // Apply sorting and filtering
  const filteredWatches = watches.filter(watch => {
    if (filterBy === 'all') return true;
    if (filterBy === 'new') return watch.isNew;
    if (filterBy === 'bestseller') return watch.isBestseller;
    return true;
  });
  
  const sortedWatches = [...filteredWatches].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'newest') return (a.isNew ? -1 : 1) - (b.isNew ? -1 : 1);
    return 0; // featured - no specific sorting
  });

  return (
    <div className="bg-black min-h-screen text-white pt-20 pb-10">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-light text-white">All Watches</h1>
          <div className="flex space-x-4">
            <select 
              className="border border-gray-700 rounded bg-black text-white px-3 py-2 text-sm focus:ring-2 focus:ring-white focus:border-white"
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value as FilterOption)}
            >
              <option value="all">All Watches</option>
              <option value="new">New Arrivals</option>
              <option value="bestseller">Bestsellers</option>
            </select>
            <select 
              className="border border-gray-700 rounded bg-black text-white px-3 py-2 text-sm focus:ring-2 focus:ring-white focus:border-white"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        {/* Watch Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sortedWatches.map((watch) => (
            <div key={watch.id} className="group">
              <div className="relative overflow-hidden bg-gray-900 rounded-lg">
                {watch.isNew && (
                  <div className="absolute top-2 left-2 bg-white text-black text-xs px-2 py-1 z-10 font-medium rounded-full">
                    New
                  </div>
                )}
                {watch.isBestseller && (
                  <div className="absolute top-2 right-2 bg-gray-300 text-black text-xs px-2 py-1 z-10 font-medium rounded-full">
                    Bestseller
                  </div>
                )}
                <img 
                  src={`/api/placeholder/300/300?text=${encodeURIComponent(watch.name)}`} 
                  alt={watch.name}
                  className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-end justify-center pb-6 transition-all duration-300">
                  <button className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white hover:bg-gray-200 text-black py-2 px-6 font-medium rounded-full">
                    View Details
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-400 font-medium text-sm">{watch.brand}</p>
                <h3 className="text-base font-medium text-white mt-1">{watch.name}</h3>
                <p className="text-base font-light text-gray-300 mt-1">${watch.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center">
          <nav className="relative z-0 inline-flex rounded-md -space-x-px" aria-label="Pagination">
            <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-700 bg-black text-sm font-medium text-gray-400 hover:bg-gray-900">
              <span className="sr-only">Previous</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-black text-sm font-medium text-gray-300 hover:bg-gray-900">
              1
            </a>
            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-white text-sm font-medium text-black">
              2
            </a>
            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-black text-sm font-medium text-gray-300 hover:bg-gray-900">
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-black text-sm font-medium text-gray-400">
              ...
            </span>
            <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-black text-sm font-medium text-gray-300 hover:bg-gray-900">
              6
            </a>
            <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-700 bg-black text-sm font-medium text-gray-400 hover:bg-gray-900">
              <span className="sr-only">Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default ViewAllWatchesPage;
