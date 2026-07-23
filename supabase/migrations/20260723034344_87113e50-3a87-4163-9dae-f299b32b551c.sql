
-- Revoke EXECUTE on SECURITY DEFINER functions from public roles
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;

REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.handle_new_user() TO service_role, supabase_auth_admin;

REVOKE ALL ON FUNCTION public.handle_updated_at() FROM PUBLIC, anon;

-- Explicitly block client-side writes to user_roles (defense in depth)
CREATE POLICY "Block client inserts on user_roles"
  ON public.user_roles FOR INSERT TO anon, authenticated
  WITH CHECK (false);

CREATE POLICY "Block client updates on user_roles"
  ON public.user_roles FOR UPDATE TO anon, authenticated
  USING (false) WITH CHECK (false);

CREATE POLICY "Block client deletes on user_roles"
  ON public.user_roles FOR DELETE TO anon, authenticated
  USING (false);
