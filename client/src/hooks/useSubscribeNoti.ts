import { useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import { instanceToPlain } from 'class-transformer';
import Client from '../lib/client';

export default function useSubscribeNoti() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) {
      console.log('Service worker is not supported in this browser');
      return;
    }

    if (!('PushManager' in window)) {
      console.log('Push is not supported in this browser');
      return;
    }
  }, []);

  const askPermission = useCallback(async () => {
    const request = await Notification.requestPermission();

    if (request !== 'granted') {
      throw new Error("We weren't granted permission.");
    }
  }, []);

  const checkPermission = useCallback(() => {
    return navigator.permissions.query({ name: 'notifications' });
  }, []);

  const subscribe = async () => {
    const serviceWorkerReg = await navigator.serviceWorker.getRegistration();

    if (!serviceWorkerReg) {
      return new Error('Service Worker not found');
    }

    let subscription = await serviceWorkerReg.pushManager.getSubscription();
    console.log(subscription);

    if (subscription) {
      toast.error('이미 알림을 구독해 뒀어요');
      return;
    }

    try {
      subscription ??= await serviceWorkerReg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: process.env.REACT_APP_VAPID_PUBLIC_KEY,
      });
    } catch (err) {
      console.error(err);
      toast.error('알림을 설정하는데 실패했어요');
    }

    const response = await Client.post('/samshiseaki/notice/register', {
      ...instanceToPlain(subscription),
    });

    if (response.status === 200) {
      toast.success('알림이 설정되었어요! 급식 순서를 알림으로 알려드릴게요');
    }
  };

  return { askPermission, checkPermission, subscribe };
}
