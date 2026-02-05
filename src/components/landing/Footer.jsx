import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a052a] border-t border-white/10 text-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-full bg-primary/20 backdrop-blur-lg flex items-center justify-center border-2 border-white/10">
                <span className="text-xl font-bold text-primary">AC</span>
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif text-foreground">Alumni Connect</h3>
                <p className="text-xs text-muted-foreground">Vignan's Lara</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Connecting generations of excellence. Building a stronger community through shared experiences and mutual growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Alumni Directory", "Events", "Career Services", "Mentorship Program", "Success Stories"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-all">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif text-foreground">Resources</h4>
            <ul className="space-y-3">
              {["Alumni Benefits", "Campus News", "Photo Gallery", "Reunion Planning", "Giving Back", "Contact Support"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-all">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif text-foreground">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Vignan's Lara Institute<br />
                  Vadlamudi, Guntur<br />
                  Andhra Pradesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+91 863 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">alumni@vignanlara.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Alumni Connect Hub - Vignan's Lara. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow Us:</span>
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-white/10 text-muted-foreground"
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
