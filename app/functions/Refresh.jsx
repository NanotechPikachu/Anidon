export function Refresh() {
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => router.refresh(), 60);
    return () => clearTimeout(timeout);
  }, []);
  return null;
}