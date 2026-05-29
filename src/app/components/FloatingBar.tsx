import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router';

interface FloatingBarProps {
  className?: string;
}

export default function FloatingBar({ className = '' }: FloatingBarProps) {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    setIsCollapsed(false);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setIsCollapsed(true);
    }, 800);
  };

  useEffect(() => {
    resetTimer();

    const handleActivity = () => {
      resetTimer();
    };

    window.addEventListener('scroll', handleActivity);
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('touchstart', handleActivity);
    window.addEventListener('touchmove', handleActivity);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      window.removeEventListener('touchmove', handleActivity);
    };
  }, []);

  return (
    null
  );
}
