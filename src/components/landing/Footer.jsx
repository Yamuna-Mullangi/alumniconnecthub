import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-full bg-primary/20 backdrop-blur-lg flex items-center justify-center border-2 border-primary-foreground/30">
                <span className="text-xl font-bold">AC</span>
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif">Alumni Connect</h3>
                <p className="text-xs opacity-80">Vignan's Lara</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Connecting generations of excellence. Building a stronger community through shared experiences and mutual growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Alumni Directory", "Events", "Career Services", "Mentorship Program", "Success Stories"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Resources</h4>
            <ul className="space-y-3">
              {["Alumni Benefits", "Campus News", "Photo Gallery", "Reunion Planning", "Giving Back", "Contact Support"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-80">
                  Vignan's Lara Institute<br />
                  Vadlamudi, Guntur<br />
                  Andhra Pradesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm opacity-80">+91 863 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm opacity-80">alumni@vignanlara.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm opacity-80">
              © {currentYear} Alumni Connect Hub - Vignan's Lara. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm opacity-80 mr-2">Follow Us:</span>
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 border border-primary-foreground/20"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
