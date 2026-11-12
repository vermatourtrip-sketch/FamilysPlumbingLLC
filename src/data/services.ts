import { Droplet, Droplets, Flame, Hammer, Plug, ShowerHead, Utensils, Waves, WashingMachine, Wrench, type LucideIcon } from 'lucide-react';

export interface ServiceStep {
  title: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  summary: string;
  intro: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  problems: string[];
  signs: string[];
  process: ServiceStep[];
  faqs: FaqItem[];
  related: string[];
}

export const SERVICES: Service[] = [
  {
    slug: 'water-heater-installation',
    name: 'Water Heater Installation and Replacement',
    summary: 'Replacement and installation of water heaters, including tankless units, for homes that need hot water they can count on.',
    intro:
      'When a water heater stops making hot water, starts leaking, or reaches the end of its useful life, a prompt replacement keeps your household running. Family\'s Plumbing LLC installs and replaces residential water heaters, including tankless units, and talks through the options that suit your home before any work begins.',
    image: 'https://images.pexels.com/photos/34938439/pexels-photo-34938439.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technician working on a heating system in a workshop',
    icon: Flame,
    problems: [
      'Lukewarm water or hot water that runs out quickly',
      'Rusty or discolored water coming from hot taps',
      'Water pooling around the base of the tank or dripping from the relief valve',
      'Popping or rumbling sounds caused by sediment buildup inside the tank',
    ],
    signs: [
      'The unit is old and needs frequent attention',
      'Visible rust or corrosion on the tank or its connections',
      'Water on the floor near the heater',
      'Hot water performance has dropped steadily over several months',
    ],
    process: [
      {
        title: 'Call and describe your setup',
        body: 'Tell us the type of water heater you have, how it is powered, and what symptoms you are seeing.',
      },
      {
        title: 'Decide on repair or replacement',
        body: 'We talk through whether repair or replacement makes more sense for your unit, then confirm availability by phone.',
      },
      {
        title: 'Install and test',
        body: 'The new unit is connected, checked for leaks, and tested for correct operation before the job is closed out.',
      },
    ],
    faqs: [
      {
        question: 'Should I repair or replace my water heater?',
        answer:
          'It depends on the age of the unit, the cost of the repair, and how the heater is performing. Call us and we will walk through both options so you can decide.',
      },
      {
        question: 'Do you install tankless water heaters?',
        answer:
          'Yes. Call to confirm whether a tankless unit suits your home and to discuss the installation.',
      },
      {
        question: 'How do I know my water heater needs replacing?',
        answer:
          'Common signs include rusty water, leaks at the base of the tank, and hot water that runs out faster than it used to.',
      },
    ],
    related: ['plumbing-leak-repair', 'kitchen-plumbing', 'plumbing-repair'],
  },
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning and Clog Removal',
    summary: 'Clearing slow and blocked sinks, tubs, and drains so water moves freely again.',
    intro:
      'Slow drains and repeat clogs usually mean a buildup is getting worse, and they rarely fix themselves. Family\'s Plumbing LLC clears clogs in kitchen sinks, bathroom sinks, tubs, and other household drains, and helps you understand where the blockage is forming so it does not keep coming back.',
    image: 'https://images.pexels.com/photos/7937292/pexels-photo-7937292.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Network of pipes and valves in a metal framework',
    icon: Waves,
    problems: [
      'Water draining slowly from a sink, tub, or shower',
      'Gurgling from a drain when another fixture is used',
      'Clogs that return in the same sink or tub',
      'Unpleasant odors rising from a drain',
    ],
    signs: [
      'Standing water in a tub or sink long after use',
      'Several fixtures draining slowly at the same time',
      'A clog that comes back soon after a home fix',
      'Water backing up when the washing machine drains',
    ],
    process: [
      {
        title: 'Call and tell us where it drains slowly',
        body: 'Describe which fixtures are affected and how long the problem has been happening.',
      },
      {
        title: 'Locate the blockage',
        body: 'We find where the drain is restricted and check whether other fixtures are involved.',
      },
      {
        title: 'Clear and test',
        body: 'We clear the blockage, run water to confirm the drain flows freely, and let you know if the problem points to a larger issue.',
      },
    ],
    faqs: [
      {
        question: 'Can you clear a clogged bathroom sink and tub?',
        answer:
          'Yes. Clogged bathroom sinks and tubs are a common job for us. Call to describe the problem and confirm availability.',
      },
      {
        question: 'Why does my drain keep clogging?',
        answer:
          'Repeat clogs often come from buildup inside the pipe or a restriction farther down the line. Call and we will discuss what to check.',
      },
      {
        question: 'Are chemical drain cleaners safe for my pipes?',
        answer:
          'Harsh chemical cleaners can damage pipes over time. Tell us what you have already tried so we can recommend the right approach.',
      },
    ],
    related: ['bathroom-plumbing', 'kitchen-plumbing', 'plumbing-repair'],
  },
  {
    slug: 'faucet-repair',
    name: 'Faucet Repair and Installation',
    summary: 'Repair, replace, and install kitchen, bathroom, and outdoor faucets.',
    intro:
      'A dripping, sputtering, or loose faucet wastes water and can slowly damage the cabinet beneath it. Family\'s Plumbing LLC repairs and installs faucets in kitchens, bathrooms, and outdoor spigots, replacing worn parts when repair is the better choice.',
    image: 'https://images.pexels.com/photos/7578999/pexels-photo-7578999.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Hand adjusting a chrome faucet in a modern bathroom',
    icon: Droplet,
    problems: [
      'Constant dripping from the spout or handle',
      'Low water pressure from a single fixture',
      'Handles that are loose, stiff, or hard to turn',
      'Water leaking at the base of the faucet',
    ],
    signs: [
      'Water stains or moisture under the sink',
      'The faucet wobbles or feels loose on the counter',
      'An outdoor spigot that will not shut off fully',
      'Water temperature that changes unexpectedly',
    ],
    process: [
      {
        title: 'Call and describe the faucet',
        body: 'Tell us the location, the type of faucet, and what it is doing.',
      },
      {
        title: 'Find the cause',
        body: 'We identify whether a cartridge, washer, valve, or supply line is responsible.',
      },
      {
        title: 'Repair or install and test',
        body: 'We complete the repair or installation and run the faucet to confirm it operates properly without leaks.',
      },
    ],
    faqs: [
      {
        question: 'Do you repair outdoor faucets?',
        answer:
          'Yes. Outdoor faucets that drip or will not shut off are a regular repair for us. Call to confirm availability.',
      },
      {
        question: 'Will a repair always stop a drip?',
        answer:
          'Often it does, but worn valves sometimes need replacing. We will explain what is needed by phone before any work starts.',
      },
      {
        question: 'Can you install a faucet I already bought?',
        answer:
          'Call us first so we can confirm the fixture and connections before scheduling the installation.',
      },
    ],
    related: ['kitchen-plumbing', 'bathroom-plumbing', 'plumbing-leak-repair'],
  },
  {
    slug: 'toilet-repair',
    name: 'Toilet Repair and Parts Replacement',
    summary: 'Fixing running, leaking, and weak-flushing toilets with the right replacement parts.',
    intro:
      'A toilet that keeps running, leaks at the base, or flushes weakly can waste a surprising amount of water every month. Family\'s Plumbing LLC repairs toilets and replaces internal parts such as fill valves and flappers, and will tell you honestly when a full replacement makes more sense.',
    image: 'https://images.pexels.com/photos/10099095/pexels-photo-10099095.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Contemporary bathroom sink with a sleek faucet',
    icon: Wrench,
    problems: [
      'A toilet that keeps running after it is flushed',
      'Water leaking from the base or the supply line',
      'Weak flushing or repeated clogs',
      'A tank that refills slowly or not at all',
    ],
    signs: [
      'Water trickling in the tank at random times',
      'The floor around the toilet feels soft or damp',
      'The water level in the bowl is too high or too low',
      'The handle has to be jiggled to flush properly',
    ],
    process: [
      {
        title: 'Call and tell us the symptoms',
        body: 'Let us know whether the toilet runs, leaks, or flushes poorly, and how long it has been happening.',
      },
      {
        title: 'Inspect the tank and bowl',
        body: 'We check the fill valve, flapper, wax seal, and supply connection to find the source.',
      },
      {
        title: 'Replace parts and test',
        body: 'We replace the worn parts and flush several times to confirm the toilet works correctly.',
      },
    ],
    faqs: [
      {
        question: 'Can you replace the parts inside my toilet tank?',
        answer:
          'Yes. Fill valves, flappers, and other internal parts are common repairs. Call to confirm the parts needed.',
      },
      {
        question: 'Does a running toilet really waste much water?',
        answer:
          'A slow leak past the flapper can add up to a significant amount of water over a month, which is why it is worth fixing.',
      },
      {
        question: 'When is replacing the toilet a better option?',
        answer:
          'When the bowl is cracked, the base is damaged, or the unit is very old, replacement is often the better choice. We will explain the options by phone.',
      },
    ],
    related: ['bathroom-plumbing', 'plumbing-leak-repair', 'plumbing-repair'],
  },
  {
    slug: 'kitchen-plumbing',
    name: 'Kitchen Plumbing Repair',
    summary: 'Kitchen sink repairs, garbage disposal installation, and drain and supply line fixes.',
    intro:
      'The kitchen sees heavy daily use, so its plumbing takes a lot of wear. Family\'s Plumbing LLC handles kitchen sink plumbing, including garbage disposal installation, drain and supply line repairs, and faucet work, and explains each step before we begin.',
    image: 'https://images.pexels.com/photos/34295401/pexels-photo-34295401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Chrome faucet running in a modern kitchen with marble countertop',
    icon: Utensils,
    problems: [
      'Slow or backed-up kitchen sink drains',
      'Leaking supply lines or sink connections',
      'A garbage disposal that hums, jams, or will not run',
      'Dishwasher drain connections that back up into the sink',
    ],
    signs: [
      'Water pooling under the sink cabinet',
      'Odors from the drain even after cleaning',
      'A disposal that makes loud noises or stops spinning',
      'Water that drains slowly after the dishwasher runs',
    ],
    process: [
      {
        title: 'Call and describe the sink',
        body: 'Tell us what the sink is doing and which appliances are connected to it.',
      },
      {
        title: 'Find the source',
        body: 'We check the drain, supply lines, disposal, and dishwasher connection to find what needs attention.',
      },
      {
        title: 'Repair or install and test',
        body: 'We complete the work and run water and appliances through a normal cycle to confirm everything operates properly.',
      },
    ],
    faqs: [
      {
        question: 'Do you install garbage disposals?',
        answer:
          'Yes. Garbage disposal installation is one of our kitchen jobs. Call to discuss the unit and confirm availability.',
      },
      {
        question: 'Can you fix a leak under the kitchen sink?',
        answer:
          'Yes. Call and describe where the water is coming from so we can plan the visit.',
      },
      {
        question: 'Is a slow kitchen drain a major problem?',
        answer:
          'Not always, but a slow drain that keeps coming back should be checked before it becomes a clog or a leak.',
      },
    ],
    related: ['faucet-repair', 'drain-cleaning', 'plumbing-leak-repair'],
  },
  {
    slug: 'bathroom-plumbing',
    name: 'Bathroom Plumbing Repair',
    summary: 'Repairs to bathroom sinks, tubs, showers, and the plumbing that serves them.',
    intro:
      'Bathroom plumbing covers sinks, tubs, showers, toilets, and the supply and drain lines behind them. Family\'s Plumbing LLC repairs and clears these fixtures so your bathroom works properly every day, and can discuss related repairs while we are there.',
    image: 'https://images.pexels.com/photos/12196323/pexels-photo-12196323.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Close-up of a sleek modern bathroom faucet',
    icon: ShowerHead,
    problems: [
      'Clogged bathroom sinks and tubs',
      'Slow drainage or cold water from a shower',
      'Leaks under the bathroom sink or behind the tub',
      'Toilets that run or drain poorly',
    ],
    signs: [
      'Standing water in the tub after a bath',
      'Damp cabinet floors or soft spots near fixtures',
      'Water pressure that changes when another fixture runs',
      'Stains on the ceiling below a bathroom',
    ],
    process: [
      {
        title: 'Call and describe the fixtures',
        body: 'Tell us which sink, tub, shower, or toilet is affected and what you have noticed.',
      },
      {
        title: 'Inspect the fixtures and drains',
        body: 'We check the drain lines, supply connections, and any visible signs of water damage.',
      },
      {
        title: 'Repair and test',
        body: 'We complete the repair, run water through each fixture, and confirm there are no leaks or slow drains.',
      },
    ],
    faqs: [
      {
        question: 'Can you clear a clogged bathroom sink and tub?',
        answer:
          'Yes. Call to describe the clog and confirm availability.',
      },
      {
        question: 'Do you repair toilets too?',
        answer:
          'Yes. Toilet repair and parts replacement is one of our services. Call to discuss the symptoms.',
      },
      {
        question: 'What if the problem is inside a wall?',
        answer:
          'We will discuss what we can see and the options by phone, then confirm the next steps during the visit.',
      },
    ],
    related: ['toilet-repair', 'drain-cleaning', 'faucet-repair'],
  },
  {
    slug: 'plumbing-leak-repair',
    name: 'Plumbing Leak Repair',
    summary: 'Finding and repairing leaking pipes, fittings, and fixtures before water damage spreads.',
    intro:
      'Even a small leak can damage floors, cabinets, and drywall if it goes unnoticed. Family\'s Plumbing LLC locates and repairs leaks in supply lines, drains, fittings, and fixtures, and explains what we found so you can decide on next steps.',
    image: 'https://images.pexels.com/photos/16509869/pexels-photo-16509869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Worker repairing pipes with tools in an indoor workspace',
    icon: Droplets,
    problems: [
      'Dripping pipes or fittings inside walls or cabinets',
      'Water stains on ceilings or walls',
      'An unexplained rise in your water bill',
      'Soft or warped flooring near plumbing',
    ],
    signs: [
      'The sound of running water when every fixture is off',
      'A musty smell or signs of mildew',
      'The water meter moving when nothing is running',
      'Damp spots that appear after showers or laundry',
    ],
    process: [
      {
        title: 'Call and describe the leak',
        body: 'Tell us where you see water, any stains or smells, and whether the leak is active.',
      },
      {
        title: 'Locate the source',
        body: 'We inspect visible plumbing and test the lines to pinpoint where the water is escaping.',
      },
      {
        title: 'Repair and check',
        body: 'We repair the leak, confirm the connection holds under normal use, and explain what we found.',
      },
    ],
    faqs: [
      {
        question: 'How can I tell if I have a hidden leak?',
        answer:
          'A water meter that moves while everything is turned off is a common sign. Call us to discuss what you are seeing.',
      },
      {
        question: 'Should I shut off the water while I wait?',
        answer:
          'If a leak is actively spreading water, turning off the water at the fixture or main valve can limit damage until we arrive.',
      },
      {
        question: 'Do you handle the damage the leak caused?',
        answer:
          'Our work covers the plumbing repair. Call to talk through what else may need attention after the leak is fixed.',
      },
    ],
    related: ['water-heater-installation', 'plumbing-repair', 'toilet-repair'],
  },
  {
    slug: 'plumbing-repair',
    name: 'General Plumbing Repair',
    summary: 'Diagnosis and repair of everyday household plumbing problems across the Tri-Cities area.',
    intro:
      'Not every plumbing problem fits neatly into one category. Family\'s Plumbing LLC diagnoses and repairs everyday household plumbing problems, explains what is wrong and why, and confirms the next steps by phone before any work begins.',
    image: 'https://images.pexels.com/photos/29226620/pexels-photo-29226620.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Plumber installing a pipe with specialized tools',
    icon: Hammer,
    problems: [
      'Pipes that knock, rattle, or whistle when water runs',
      'Low water pressure throughout the house',
      'Fixtures that stop working unexpectedly',
      'Washing machine drain or water line problems',
    ],
    signs: [
      'Unusual noises whenever water runs',
      'Water pressure that has dropped over time',
      'More than one fixture acting up at once',
      'Visible wear or corrosion on exposed pipes',
    ],
    process: [
      {
        title: 'Call and describe the problem',
        body: 'Tell us what you are noticing and which parts of the house are affected.',
      },
      {
        title: 'Diagnose on site',
        body: 'We find the cause and explain the options, including what is urgent and what can wait.',
      },
      {
        title: 'Repair and confirm',
        body: 'We complete the agreed repair and test the affected fixtures before we leave.',
      },
    ],
    faqs: [
      {
        question: 'What if I am not sure what is wrong?',
        answer:
          'Call and describe what you are seeing. We will talk it through and schedule a visit to diagnose the problem.',
      },
      {
        question: 'Do you serve areas outside Colonial Heights?',
        answer:
          'Yes. We serve nearby communities including Petersburg, Richmond, Chesterfield, and Chester. Call to confirm availability for your address.',
      },
      {
        question: 'Do you offer emergency plumbing service?',
        answer:
          'We do not advertise round-the-clock emergency service. Call us to check current availability.',
      },
    ],
    related: ['plumbing-leak-repair', 'drain-cleaning', 'faucet-repair'],
  },
  {
    slug: 'garbage-disposal-installation',
    name: 'Garbage Disposal Installation',
    summary: 'Installing and replacing garbage disposals so your kitchen sink grinds food waste and drains properly.',
    intro:
      'A garbage disposal makes kitchen cleanup easier, but a unit that hums, jams, or leaks can turn a simple task into a problem. Family\'s Plumbing LLC installs new garbage disposals and connects them to your sink drain and electrical supply, so the unit runs quietly and the connections stay dry.',
    image: 'https://images.pexels.com/photos/87299/pexels-photo-87299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Top view of a kitchen sink with water splashing',
    icon: Plug,
    problems: [
      'A disposal that hums but does not spin',
      'Leaks at the sink flange or disposal connections',
      'Food waste that does not grind completely',
      'A unit that stops working after a jam',
    ],
    signs: [
      'The disposal is loud or vibrates heavily when running',
      'Water pools under the sink after the disposal runs',
      'Sink drains slowly even after the unit is cleared',
      'The disposal smells even after cleaning',
    ],
    process: [
      {
        title: 'Call and tell us your sink setup',
        body: 'Let us know whether you need a new unit installed or an existing disposal repaired or replaced.',
      },
      {
        title: 'Check the sink and connections',
        body: 'We confirm the drain, mounting, and electrical connection before installing the unit.',
      },
      {
        title: 'Install and test',
        body: 'We connect the disposal, check every joint for leaks, and run it with water to confirm it works.',
      },
    ],
    faqs: [
      {
        question: 'Do you install garbage disposals I already bought?',
        answer:
          'Call us first to confirm the unit and your sink setup so we can plan the installation.',
      },
      {
        question: 'Why does my disposal hum but not turn?',
        answer:
          'This often points to a jam or a unit that needs to be cleared. Call and describe what you hear so we can advise you.',
      },
      {
        question: 'Can you fix a leaking disposal?',
        answer:
          'Yes. Leaks at the sink flange or disposal connections are a common repair. Call to discuss the leak.',
      },
    ],
    related: ['kitchen-plumbing', 'drain-cleaning', 'faucet-repair'],
  },
  {
    slug: 'washing-machine-line-repair',
    name: 'Washing Machine Drain and Water Line Repair',
    summary: 'Repairing washing machine drain lines and water supply lines that leak, clog, or back up.',
    intro:
      'A washing machine drain that backs up or a water line that drips can damage laundry rooms and floors quickly. Family\'s Plumbing LLC repairs washing machine drain lines and water supply lines, and clears blockages that cause standing water after a load.',
    image: 'https://images.pexels.com/photos/8581897/pexels-photo-8581897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Industrial steel pipes running along a brick wall',
    icon: WashingMachine,
    problems: [
      'Water backing up from the washer drain during a cycle',
      'Dripping or leaking hot and cold supply hoses or lines',
      'A washer that will not fill or drain properly',
      'Gurgling from the laundry standpipe',
    ],
    signs: [
      'Water on the laundry room floor during or after a cycle',
      'Hose connections that are damp, stained, or crusted',
      'The washer drains very slowly or stops mid-cycle',
      'Musty smells near the laundry area',
    ],
    process: [
      {
        title: 'Call and describe the washer problem',
        body: 'Tell us whether the issue is with draining, filling, or a leak, and where you see water.',
      },
      {
        title: 'Find the blockage or leak',
        body: 'We check the standpipe, drain line, and water supply connections for the cause.',
      },
      {
        title: 'Repair and run a test cycle',
        body: 'We complete the repair and confirm the washer fills and drains properly without leaks.',
      },
    ],
    faqs: [
      {
        question: 'Can you fix a washing machine drain that backs up?',
        answer:
          'Yes. Drain backups from a washer are a repair we handle. Call to describe the backup and confirm availability.',
      },
      {
        question: 'Do you repair washing machine water lines?',
        answer:
          'Yes. Hot and cold supply line leaks are common repairs. Call to discuss the leak before we visit.',
      },
      {
        question: 'Should I turn off the water to my washer?',
        answer:
          'If a supply hose is actively leaking, closing the valve behind the washer can limit water damage until we arrive.',
      },
    ],
    related: ['plumbing-leak-repair', 'drain-cleaning', 'plumbing-repair'],
  },
];

export function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
