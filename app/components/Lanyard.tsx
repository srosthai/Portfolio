"use client";

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

// Static data for Discord presence
const staticPresence = {
  data: {
    discord_status: 'online',
    discord_user: {
      username: 'Sovannthai',
      discriminator: '0000',
      avatar: 'https://cdn.discordapp.com/embed/avatars/0.png' // Using a default Discord avatar
    }
  }
};

export default function Lanyard() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'idle':
        return 'bg-yellow-500';
      case 'dnd':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative flex items-center gap-3 bg-neutral-900/50 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 hover:border-pink-500/50 transition-all duration-300"
    >
      <div className="relative">
        <img
          src={staticPresence.data.discord_user.avatar}
          alt={staticPresence.data.discord_user.username}
          className="w-8 h-8 rounded-full ring-2 ring-pink-500/20 group-hover:ring-pink-500/40 transition-all duration-300"
        />
        <div
          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-neutral-900 ${getStatusColor(
            staticPresence.data.discord_status
          )} ring-2 ring-pink-500/20 group-hover:ring-pink-500/40 transition-all duration-300`}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-white">
            {staticPresence.data.discord_user.username}
          </span>
          <MessageCircle className="w-4 h-4 text-[#5865F2]" />
        </div>
        <span className="text-xs text-gray-400 capitalize">
          {staticPresence.data.discord_status}
        </span>
      </div>
      <motion.div
        className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/5 rounded-full transition-colors duration-300"
        whileHover={{ scale: 1.02 }}
      />
    </motion.div>
  );
} 