import { trailService } from "$lib/services/trail-service";
import type { Session } from "$lib/types/trail-types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
  const cookieStr = cookies.get("trail-user") as string;
  if (cookieStr) {
    const session = JSON.parse(cookieStr) as Session;
    return {
      trails: await trailService.getTrails(session.token),
      locations: await trailService.getLocations(session.token)
    };
  }
};