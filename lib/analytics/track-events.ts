"use client";

export type MarketingEventName =
  | "cta_demo_click"
  | "cta_proposta_click"
  | "form_submit"
  | "scroll_depth_50"
  | "scroll_depth_75"
  | "scroll_depth_90"
  | "nav_profile_empresa"
  | "nav_profile_transportadora"
  | "nav_profile_torre"
  | "feature_filter_use"
  | "faq_expand"
  | "page_view"
  | "resource_view"
  | "resource_search"
  | "resource_category_filter"
  | "resource_profile_filter"
  | "resource_navigate_related";

type EventLocation = "header" | "hero" | "section" | "footer" | "modal";

export interface TrackEventParams {
  event: MarketingEventName;
  properties?: Record<string, string | number | boolean>;
  location?: EventLocation;
}

type AnalyticsWindow = Window & {
  gtag?: (type: "event", event: string, params: Record<string, unknown>) => void;
  va?: (type: "event", params: Record<string, unknown>) => void;
};

export function trackEvent({ event, properties, location }: TrackEventParams): void {
  if (typeof window === "undefined") return;

  const analyticsWindow = window as AnalyticsWindow;
  const eventData = {
    event_name: event,
    event_location: location ?? "page",
    ...properties,
    page_path: window.location.pathname,
  };

  analyticsWindow.gtag?.("event", event, eventData);
  analyticsWindow.va?.("event", { name: event, ...eventData });
}

export function trackDemoClick(location: EventLocation = "section"): void {
  trackEvent({ event: "cta_demo_click", location });
}

export function trackPropostaClick(location: EventLocation = "section"): void {
  trackEvent({ event: "cta_proposta_click", location });
}

export function trackFormSubmit(formName: string): void {
  trackEvent({
    event: "form_submit",
    properties: { form_name: formName },
    location: "section",
  });
}

export function trackProfileNav(profile: "empresa" | "transportadora" | "torre"): void {
  trackEvent({
    event: `nav_profile_${profile}` as MarketingEventName,
    properties: { profile },
  });
}

export function trackFeatureFilter(category: string, tags: string[]): void {
  trackEvent({
    event: "feature_filter_use",
    properties: {
      category,
      tags: tags.join(","),
      tags_count: tags.length,
    },
  });
}

export function trackProfileTabSelect(profile: string): void {
  trackEvent({
    event: "nav_profile_empresa",
    properties: { profile_selected: profile },
  });
}

export function createScrollTracker(thresholds: number[]): () => void {
  const tracked = new Set<number>();

  return () => {
    if (typeof window === "undefined") return;

    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollableHeight <= 0) return;

    const scrollPercent = (window.scrollY / scrollableHeight) * 100;

    thresholds.forEach((threshold) => {
      if (scrollPercent >= threshold && !tracked.has(threshold)) {
        tracked.add(threshold);
        trackEvent({
          event: `scroll_depth_${threshold}` as MarketingEventName,
          properties: { depth: threshold },
        });
      }
    });
  };
}
