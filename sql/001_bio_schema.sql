create table if not exists bio_subscribers (
  id bigserial primary key,
  email text not null unique,
  status text not null check (status in ('pending', 'active', 'unsubscribed')),
  consented_at timestamptz not null,
  consent_source text not null,
  confirmed_at timestamptz,
  consent_withdrawn_at timestamptz,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  referrer text,
  confirmation_token_hash text unique,
  unsubscribe_token_hash text not null unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists bio_subscribers_status_idx on bio_subscribers (status);

create table if not exists bio_events (
  id bigserial primary key,
  event_name text not null,
  path text not null,
  session_id text not null,
  source text,
  medium text,
  campaign text,
  content text,
  referrer text,
  target_id text,
  metadata jsonb not null default '{}'::jsonb,
  occurred_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index if not exists bio_events_occurred_at_idx on bio_events (occurred_at desc);
create index if not exists bio_events_source_idx on bio_events (source, event_name);
create index if not exists bio_events_session_idx on bio_events (session_id);

